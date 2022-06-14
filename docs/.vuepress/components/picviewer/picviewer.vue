<template>
    <div class="aui-picviewer__wrapper">
        <!-- gallery为显示区域，默认撑满父级div -->
        <div class="gallery" ref="gallery">
            <!-- 图片 -->
            <img class="image" 
                v-if="!multipicShow" 
                ref="image" 
                :src="imageUrl"
                :style="{
                    transform: `rotate(${roted}deg) scale(${ratio})`,
                    width: `${imageInitWidth}px`,
                    height: `${imageInitHeight}px`,
                    left: `${imageInitLeft}px`,
                    top: `${imageInitTop}px`
                }"
            >
            <!-- 多图显示组件 -->
            <aui-multipic-viewer v-else :imgData="multiImgArr" ref="mutiImage"></aui-multipic-viewer>
            <!-- 操作按钮 -->
            <div class="tool" v-show="!multipicShow && toolbarShow">
                <div class="toolct">
                    <span title="放大" @click="biggerImage"><i class="aui-icon-zoom-in"></i></span>
                    <span title="缩小" @click="smallerImage"><i class="aui-icon-zoom-out"></i></span>
                    <span title="还原" @click="recoverImage"><i class="aui-icon-full-screen"></i></span>
                    <span v-show="rotateShow" title="向左旋转" @click="rotateLeft"><i class="aui-icon-refresh-left"></i></span>
                    <span v-show="rotateShow" title="向右旋转" @click="rotateRight"><i class="aui-icon-refresh-right"></i></span>
                    <span v-show="preOrNextShow" title="上一张" @click="prevImage"><i class="aui-icon-arrow-left"></i></span>
                    <span v-show="preOrNextShow" title="下一张" @click="nextImage"><i class="aui-icon-arrow-right"></i></span>
                    <span v-show="multiShow" title="多图显示" @click="openMultiPic"><i class="aui-icon-document-copy"></i></span>
                </div>
            </div>
            <!-- 缩略图 -->
            <div class="thumbnails" v-show="percent > 100 && !multipicShow" :style="{width: `${thumbnailsWidth}px`,height: `${thumbnailsHeight}px`}">
                <!-- <span class="thumbClose" title="关闭缩略图" @click="closeThumb"><i class="aui-icon-close"></i></span> -->
                <img ref="thumbImg" 
                    :src="imageUrl" 
                    :style="{
                        width: `${thumbnailsImgWidth}px`, 
                        height: `${thumbnailsImgHeight}px`, 
                        transform: `rotate(${roted}deg)`
                    }"
                >
                <div class="thumbDrag" 
                    ref="thumbDrag"
                    :style="{
                        width: `${thumbDragWidth}px`, 
                        height: `${thumbDragHeight}px`,
                        left: `${thumbDragLeft}px`,
                        top: `${thumbDragTop}px`
                    }"
                ><span></span></div>
            </div>
        </div>
    </div>
</template>

<script>
import AuiMultipicViewer from "./multipic-viewer.vue"
export default {
    name: "AuiPicviewer",
    props: {
        imageUrl: {         //传进来的单张图片的路径
            type: String,
        },
        toolbarShow: {
            type: Boolean,  //是否显示操作栏
            default: true
        },
        rotateShow: {       //左旋和右旋图标是否显示
            type: Boolean,
            default: true
        },
        preOrNextShow: {    //上一张和下一张图标是否显示
            type: Boolean,
            default: true
        },
        multiShow: {        //多图显示图标是否显示
            type: Boolean,
            default: true
        },
        multiImgArr: Array   //多图显示的图片信息数组
    },
    components: {
        AuiMultipicViewer
    },
    data() {
        return {     
            originWidth: 0, // url获取的原始图片宽度
            originHeight: 0, // url获取的原始图片高度
 	 		galleryWidth: 0,//显示区域初始宽度
            galleryHeight: 0,//显示区域初始高度  
            image: null, //图片的dom
            ratio: 1, //图片缩放倍率
            roted: 0, //旋转度数
            multipicShow: false, //是否显示多图组件
        }
    },
    computed: {
        //计算显示出的图片的初始宽
        imageInitWidth() {
            if(this.isVertical) {
                let { height } = this.resizeImage(this.galleryWidth,this.galleryHeight,this.originHeight,this.originWidth)
                return height;
            }else {
                let { width } = this.resizeImage(this.galleryWidth,this.galleryHeight,this.originWidth,this.originHeight)
                return width;
            }
        },
        //计算显示出的图片的初始高
        imageInitHeight() {
            if(this.isVertical) {
                let { width } = this.resizeImage(this.galleryWidth,this.galleryHeight,this.originHeight,this.originWidth)
                return width
            }else {
                let { height } = this.resizeImage(this.galleryWidth,this.galleryHeight,this.originWidth,this.originHeight)
                return height;
            }
        },
        //计算显示出的图片居中需要的初始左偏移量
        imageInitLeft() {
            return this.exactNum((this.galleryWidth - this.imageInitWidth) / 2)
        },
        //计算显示出的图片居中需要的初始上偏移量
        imageInitTop() {
            return this.exactNum((this.galleryHeight - this.imageInitHeight) / 2)
        },
        //计算放大或者缩小的百分比
        percent() {
            return this.exactNum(this.ratio * 100) 
        },
        //计算图片实时的宽
        imgRealWidth() {
            return this.exactNum(this.imageInitWidth * this.ratio) 
        },
        //计算图片实时的高
        imgRealHeight() {
            return this.exactNum(this.imageInitHeight * this.ratio) 
        },
        //旋转后的图片是不是90度的奇数倍
        isVertical() {
            if(Math.abs(this.roted) % 180 === 90) return true;
            return false
        },
        //右下角缩略图外框宽度
        thumbnailsWidth() {
            return this.exactNum(this.galleryWidth / 3) 
        },
        //右下角缩略图外框高度
        thumbnailsHeight() {
            return this.exactNum(this.galleryHeight / 3)
        },
        //缩略图图片初始宽度
        thumbnailsImgWidth() {
            if(this.isVertical) {
                let { height } = this.resizeImage(this.thumbnailsWidth,this.thumbnailsHeight,this.originHeight,this.originWidth)
                return height;
            }else {
                let { width } = this.resizeImage(this.thumbnailsWidth,this.thumbnailsHeight,this.originWidth,this.originHeight)
                return width;
            }
        },
        //缩略图图片初始高度
        thumbnailsImgHeight() {
            if(this.isVertical) {
                let { width } = this.resizeImage(this.thumbnailsWidth,this.thumbnailsHeight,this.originHeight,this.originWidth)
                return width;
            }else {
                let { height } = this.resizeImage(this.thumbnailsWidth,this.thumbnailsHeight,this.originWidth,this.originHeight)
                return height;
            }
        },
        //缩略图里可拖拽小白框的宽度
        thumbDragWidth() {
            if(this.isVertical) {
                if(this.imgRealHeight <= this.galleryWidth) {
                    return this.thumbnailsImgHeight
                }else {
                    return this.exactNum(this.galleryWidth / this.imgRealHeight * this.thumbnailsImgHeight)
                }
            }else {
                if(this.imgRealWidth <= this.galleryWidth) {
                    return this.thumbnailsImgWidth
                }else {
                    return this.exactNum(this.galleryWidth / this.imgRealWidth * this.thumbnailsImgWidth)
                }
            }
        },
        //缩略图里可拖拽小白框的高度
        thumbDragHeight() {
            if(this.isVertical) {
                if(this.imgRealWidth <= this.galleryHeight) {
                    return this.thumbnailsImgWidth
                }else {
                    return this.exactNum(this.galleryHeight / this.imgRealWidth * this.thumbnailsImgWidth)
                }
            }else {
                if(this.imgRealHeight <= this.galleryHeight) {
                    return this.thumbnailsImgHeight
                }else {
                    return this.exactNum(this.galleryHeight / this.imgRealHeight * this.thumbnailsImgHeight)
                }
            }
        },
        //计算缩略图里可拖拽小白框需要的初始左偏移量
        thumbDragLeft() {
            return this.exactNum((this.thumbnailsWidth - this.thumbDragWidth) / 2)
        },
        //计算缩略图里可拖拽小白框需要的初始上偏移量
        thumbDragTop() {
            return this.exactNum((this.thumbnailsHeight - this.thumbDragHeight) / 2)
        }   
    },
    methods: {
        //初始化一些数据
        initData() {
            this.image = this.$refs.image;  //保存大图的dom
            this.getOriginSize();       //获得原始图片宽高
            this.getGalleryWH();        //获得显示区域宽高
            this.ratio = 1;             //缩放恢复100%
            this.roted = 0;             //旋转度数恢复为0
            this.$refs.gallery.addEventListener("mousewheel",this.mouseWheelScroll)
            this.$refs.image.addEventListener("mousedown",this.imgMouseDownHandler)
            this.$refs.thumbDrag.addEventListener("mousedown",this.thumbDragMouseDownHandler)
        },
        imgMouseDownHandler(e) {
            this.dragImage(e)
            e.preventDefault()
        },
        thumbDragMouseDownHandler(e) {
            this.dragThumbDrag(e)
            e.preventDefault()
        },
        //获取显示区域宽高
        getGalleryWH() {
            let galleryDiv = this.$refs.gallery
            this.galleryWidth = galleryDiv.clientWidth;
            this.galleryHeight = galleryDiv.clientHeight;
        },
        //放大图片
        biggerImage() {
            this.ratio = this.ratio >= 16 ? 16 : this.exactNum(this.ratio + 0.1) 
            this.setImagePosition()
        },
        //缩小图片
        smallerImage() {
            this.ratio = this.ratio >= 0.2 ? this.exactNum(this.ratio - 0.1) : this.ratio;
            this.setImagePosition()
        },
        //设置图片位置为居中
        setImagePosition(){
            this.image.style.left = this.imageInitLeft + "px";
            this.image.style.top = this.imageInitTop + "px";
        },
        //向左旋转
        rotateLeft() {
            this.ratio = 1;
            this.roted -= 90;
        },
        //向右旋转
        rotateRight() {
            this.ratio = 1;
            this.roted += 90;
        },
        //上一张
        prevImage() {
            this.$emit('pre-img');
        },
        //下一张
        nextImage() {
            this.$emit('next-img');
        },
        //点击多图展示
        openMultiPic() {
            this.$emit('get-multi-pic-arr');
            this.multipicShow = true;
        },
        //鼠标滚轮缩放图片
        mouseWheelScroll(e) {
            !this.multipicShow && e.preventDefault();
            let _direction = parseInt(e.wheelDelta || -e.detail);
            //滚轮向上滚动
            if(_direction > 0) {
                this.biggerImage()
            }else{
                //滚轮向下滚动
                this.smallerImage()
            }
        },
        //拖拽图片
        dragImage(e) {
            let dragDiv = this.image;   //要拖拽的物体(大图)
            dragDiv.style.cursor = "grab";  //鼠标样式变为手
            let startX = e.clientX,     //鼠标按下时的位置 
                startY = e.clientY;
            let preL = Number(dragDiv.style.left.replace('px','')),     //鼠标移动之前之前图片的left,top
                preT = Number(dragDiv.style.top.replace('px',''));
            let preThumL = Number(this.$refs.thumbDrag.style.left.replace('px','')),    //鼠标移动之前之前缩略图里面可拖拽小白框的left,top
                preThumT = Number(this.$refs.thumbDrag.style.top.replace('px',''));

            let options = { startX, startY, preL, preT, preThumL, preThumT };
            let mouseMoveHandler = (e) => { 
                let obj = this.imageMouseMove(e,options) 
                options = obj
            }
            let mouseUpHandler = () => {
                dragDiv.style.cursor = "";
                document.removeEventListener("mousemove", mouseMoveHandler);
                document.removeEventListener("mouseup", mouseUpHandler);
            }

            document.addEventListener("mousemove", mouseMoveHandler)
            document.addEventListener("mouseup", mouseUpHandler)
        },
        imageMouseMove(e, options) {
            let { startX, startY, preL, preT, preThumL, preThumT } = options;
            let currentX = e.clientX,       //鼠标移动时的实时位置
                currentY = e.clientY;
            let disX = currentX - startX,   //鼠标在水平方向上移动的距离     
                disY = currentY - startY;    
            let nextL = preL + disX,    //如果拖动在边界内，要把这个值 赋值给dragDiv的left
                nextT = preT + disY;
            let nextThumL,nextThumT;    //如果拖动在边界内，要把这个值 赋值给缩略图里面的小框的left
            if(this.isVertical) {
                nextThumL = preThumL + -this.exactNum(disX / this.imgRealHeight * this.thumbnailsImgHeight)
                nextThumT = preThumT + -this.exactNum(disY / this.imgRealWidth * this.thumbnailsImgWidth)
            }else {
                nextThumL = preThumL + -this.exactNum(disX / this.imgRealWidth * this.thumbnailsImgWidth)
                nextThumT = preThumT + -this.exactNum(disY / this.imgRealHeight * this.thumbnailsImgHeight)
            }
            /*
                ~~~~~判断拖拽边界~~~~~
                可拖拽的两个条件，以left为例，top同理
                1.图片实时宽 > 显示区域宽
                2.图片在浏览器的x坐标加鼠标在水平方向上移动的距离 <= 显示区域在浏览器的x坐标
                图片在浏览器的x坐标加图片宽度加鼠标在水平方向上移动的距离 >= 显示区域在浏览器的x坐标加显示区域宽度
            */
            let dragRectObj = this.image.getBoundingClientRect();
            let galleryRectObj = this.$refs.gallery.getBoundingClientRect();
            let { width:imgW, height:imgH, x:imgX, y:imgY } = dragRectObj;
            let { width:gallW, height:gallH, x:gallX, y:gallY } = galleryRectObj;

            if(imgW > this.galleryWidth && imgX + disX <= gallX && imgX + imgW + disX >= gallX + gallW) {
                this.image.style.left = nextL + "px";  //移动大图
                this.$refs.thumbDrag.style.left = nextThumL + "px"; //移动缩略图里面的小框
                preL = nextL;   //重置preL
                preThumL = nextThumL;   //重置preThumL
            }
            if(imgH > this.galleryHeight && imgY + disY <= gallY && imgY + imgH + disY >= gallY + gallH) {
                this.image.style.top = nextT + "px";
                this.$refs.thumbDrag.style.top = nextThumT + "px";
                preT = nextT;
                preThumT = nextThumT;
            }
            startX = e.clientX;     //重置startX
            startY = e.clientY;     //重置startY

            return { startX, startY, preL, preT, preThumL, preThumT }
        },
        //拖拽缩略图里面的小白框
        dragThumbDrag(e) {
            let dragDiv = this.$refs.thumbDrag;
            dragDiv.style.cursor = "grab";
            let startX = e.clientX,
                startY = e.clientY;
            let preL = Number(dragDiv.style.left.replace('px','')),     //鼠标移动之前之前小白框的left,top
                preT = Number(dragDiv.style.top.replace('px',''));
            let preImgL = Number(this.image.style.left.replace('px','')),      //鼠标移动之前之前大图的left,top
                preImgT = Number(this.image.style.top.replace('px',''));

            let options = { startX, startY, preL, preT, preImgL, preImgT };
            let mouseMoveHandler = (e) => {
                let obj = this.thumbDragMouseMove(e,options)
                options = obj
            };
            let mouseUpHandler = () => {
                dragDiv.style.cursor = "grab";
                document.removeEventListener("mousemove",mouseMoveHandler);
                document.removeEventListener("mouseup",mouseUpHandler);
            };

            document.addEventListener("mousemove",mouseMoveHandler);
            document.addEventListener("mouseup",mouseUpHandler)
        },
        thumbDragMouseMove(e,options) {
            let { startX, startY, preL, preT, preImgL, preImgT } = options;
            let currentX = e.clientX,
                currentY = e.clientY;
            let disX = currentX - startX,     
                disY = currentY - startY;  
            let nextL = preL + disX,    //如果拖动在边界内，要把这个值 赋值给dragDiv的left
                nextT = preT + disY;
            let nextImgL,nextImgT;      //如果拖动在边界内，要把这个值 赋值给大图的left
            if(this.isVertical) {
                nextImgL = preImgL + -this.exactNum(disX / this.thumbnailsImgHeight * this.imgRealHeight);
                nextImgT = preImgT + -this.exactNum(disY / this.thumbnailsImgWidth * this.imgRealWidth);
            }else {
                nextImgL = preImgL + -this.exactNum(disX / this.thumbnailsImgWidth * this.imgRealWidth);
                nextImgT = preImgT + -this.exactNum(disY / this.thumbnailsImgHeight * this.imgRealHeight);
            }
            //控制边界，边界应该在缩略框显示的图片的里面(道理同之前大图的拖拽)
            let dragRectObj = this.$refs.thumbDrag.getBoundingClientRect();
            let thumbImgRectObj = this.$refs.thumbImg.getBoundingClientRect();
            let {width:tDragW, height:tDragH, x:tDragX, y:tDragY} = dragRectObj;
            let {width:tImgW, height:tImgH, x:tImgX, y:tImgY} = thumbImgRectObj;

            if(tDragX + tDragW + disX <= tImgX + tImgW && tDragX + disX >= tImgX) {
                this.$refs.thumbDrag.style.left = nextL + "px";       //移动缩略图里面的小框
                this.image.style.left = nextImgL + "px"; //移动大图
                preL = nextL;
                preImgL = nextImgL;
            }
            if(tDragY + tDragH + disY <= tImgY + tImgH && tDragY + disY >= tImgY) {
                this.$refs.thumbDrag.style.top = nextT + "px";
                this.image.style.top = nextImgT + "px";
                preT = nextT;
                preImgT = nextImgT;
            }
            startX = e.clientX;
            startY = e.clientY;  
            
            return { startX, startY, preL, preT, preImgL, preImgT }
        },
        //还原图片初始的样子
        recoverImage() {
            this.ratio = 1;
            this.roted = 0;
            this.setImagePosition()
        },
        //获取url原始图片宽高
        getOriginSize() {
            let originImg = new Image();
            originImg.src = this.imageUrl;
            originImg.onload = () => {
                this.originWidth = originImg.width;
                this.originHeight = originImg.height;
            }
        },
        //精确的对一个数字保留两位小数并四舍五入，还可以解决精度丢失问题（即0.1+0.2=0.30000004）
        exactNum(num) {
            return Math.round((num + Number.EPSILON) * 100) / 100
        },
        //计算图片应该显示在可视区域的宽高
        resizeImage(vW,vH,oW,oH) {
            let width,height;
            if(vW / oW * oH > vH) {
                return {
                    height: vH,
                    width: this.exactNum(vH / oH * oW)
                }
            }else {
                return {
                    width: vW,
                    height: this.exactNum(vW / oW * oH)
                }
            }
        }
    },
    watch: {
        imageUrl(oldUrl,newUrl) {
            this.ratio = 1;
            this.roted = 0;
            this.getOriginSize();
            this.setImagePosition()
        },
        multipicShow(val) {
            if(!val) {
                this.$nextTick(() => {
                    this.initData()
                })
            }
        }
    },
    mounted() {
        this.initData();
    },
    beforeDestroy() {
        this.$refs.gallery.removeEventListener("mousewheel",this.mouseWheelScroll);
        this.$refs.image && this.$refs.image.removeEventListener("mousedown",this.imgMouseDownHandler);
        this.$refs.thumbDrag && this.$refs.thumbDrag.removeEventListener("mousedown",this.thumbDragMouseDownHandler);
    }
}
</script>

<style scoped>
.aui-picviewer__wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
.gallery{
	width: 100%;
    height: 100%;
    background-color: #E9ECEF;
}
.image {
    position: absolute;
    display: block;
    z-index: 99;
    margin: 0;
    padding: 0;
}
.tool {
    position: absolute;
    bottom: 4px;
    width: 100%;
    text-align: center;
    font-size: 20px;
    z-index: 99;
}
.toolct {
    display: inline-block;
    height: 30px;
    background-color: #6f6966;
    padding: 5px 14px;
    box-sizing: border-box;
    border-radius: 6px;
}
.toolct span {
    cursor: pointer;
}
.thumbnails {
    position: absolute;
    right: 0px;
    bottom: 0px;
    border: 1px solid #ffffff;
    z-index: 99;
    border-radius: 5px;
    background-color: rgba(177, 177, 177, 0.5);
}
.thumbnails .thumbDrag{
    position: absolute;
    border: 1px solid black;   
    box-sizing: border-box;      
}
.thumbnails .thumbDrag span{
	width:100%;
	height:100%;   
	border: 1px solid white;
	display: block;
    box-sizing: border-box;  
}
.thumbnails .thumbClose{
	position: absolute;
    right: 1px;
    top: -2px;
    cursor: pointer;
    height: 13px;
    z-index: 999;
}
.thumbnails img{
    margin: auto;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
</style>