<template>
    <div class="aui-multipic-item__wrapper" ref="gallery">
        <span class="imgTitle" ref="title" :style="{top: `${titleInitTop}px`}">{{imgTitle}}</span>
        <img class="image"
            :src="imgUrl" 
            :title="imgTitle"
            :style="{
                width: `${imageInitWidth}px`,
                height: `${imageInitHeight}px`,
                left: `${imageInitLeft}px`,
                top: imageInitTop > titleHeight ? `${imageInitTop}px` : `${titleHeight}px`
            }"
        >    
    </div>    
</template>
<script>
export default {
    name: "AuiMultipicItem",
    props: {
        imgUrl: String,
        imgTitle: String
    },
    data() {
        return {
            galleryWidth: 0,
            galleryHeight: 0,
            originWidth: 0,
            originHeight: 0,
            titleHeight: 0
        }
    },
    computed: {
         //计算显示出的图片的初始宽
        imageInitWidth() {
            let { width } = this.resizeImage(this.galleryWidth,this.galleryHeight,this.originWidth,this.originHeight)
            return width;
        },
        //计算显示出的图片的初始高
        imageInitHeight() {
            let { height } = this.resizeImage(this.galleryWidth,this.exactNum(this.galleryHeight - this.titleHeight),this.originWidth,this.originHeight)
            return height;
        },
        //计算显示出的图片居中需要的初始左偏移量
        imageInitLeft() {
            return this.exactNum((this.galleryWidth - this.imageInitWidth) / 2)
        },
        //计算显示出的图片居中需要的初始上偏移量
        imageInitTop() {
            return this.exactNum((this.galleryHeight - this.imageInitHeight) / 2)
        },
        titleInitTop() {
            return this.exactNum(this.imageInitTop - this.titleHeight) < 0 ? 0 : this.exactNum(this.imageInitTop - this.titleHeight - 1)
        }
    },
    methods: {
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
        },
        //获取url原始图片宽高
        getOriginSize() {
            let originImg = new Image();
            originImg.src = this.imgUrl;
            originImg.onload = () => {
                this.originWidth = originImg.width;
                this.originHeight = originImg.height;
            }
        },
        initData() {
            let galleryDiv = this.$refs.gallery;
            this.galleryWidth = galleryDiv.clientWidth;
            this.galleryHeight = galleryDiv.clientHeight;
            let titleSpan = this.$refs.title;
            this.titleHeight = titleSpan.clientHeight + 1;
            this.getOriginSize();
        }
    },
    mounted() {
        this.initData()
    },
}
</script>
<style scoped>
.aui-multipic-item__wrapper {
    width: 100%;
    height: 100%;
    border: 1px solid #C19C76;
    position: relative;
}
.image {
    position: absolute;
}
.imgTitle {
    font-weight: 500;
    position: absolute;
    left: 5px;
    z-index: 99;
}
</style>