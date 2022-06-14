<template>
    <div class="aui-multipic-viewer__wrapper">
        <div v-for="imgMes in imgData" :key="imgMes.index">
            <aui-multipic-item :imgUrl="imgMes.imgurl" :imgTitle="imgMes.title"></aui-multipic-item>
        </div>
    </div>
</template>

<script>
import AuiMultipicItem from './multipic-item';
export default {
    name: "AuiMultipicViewer",
    props: {
        imgData: Array
    },
    components: {
        AuiMultipicItem
    },
}
</script>

<style scoped>
.aui-multipic-viewer__wrapper {
    width: 100%;
    height: 100%;
    overflow-y: auto;
}
.aui-multipic-viewer__wrapper::-webkit-scrollbar {
    width: 8px;
    background-color: #F5F5F5
}
.aui-multipic-viewer__wrapper::-webkit-scrollbar-thumb {
    background-color: #AAA;
    border-radius: 10px;
}
.aui-multipic-viewer__wrapper::-webkit-scrollbar-track {
    background-color: #F5F5F5;
    border-radius: 10px;
}
.aui-multipic-viewer__wrapper div {
    display: inline-block;
    box-sizing: border-box;
    background-color: #E9ECEF;
}
/* 只有一个img */
.aui-multipic-viewer__wrapper > div:only-child {
    width: 100%;
    height: 100%;
    float: left;
}
/* 有两个img */
.aui-multipic-viewer__wrapper > div:first-child:nth-last-child(2),
.aui-multipic-viewer__wrapper > div:first-child:nth-last-child(2) ~ div {
    width: 50%;
    height: 100%;
    float: left;
}
/* 有三个img */
.aui-multipic-viewer__wrapper > div:first-child:nth-last-child(3) {
    width: 50%;
    height: 100%;
    float: left;
}
.aui-multipic-viewer__wrapper > div:nth-child(2):nth-last-child(2),
.aui-multipic-viewer__wrapper > div:nth-child(2):nth-last-child(2) ~ div {
    width: 50%;
    height: 50%;
    float: left;
}
/* 有四个及四个以上 */
.aui-multipic-viewer__wrapper > div:first-child:nth-last-child(n+4),
.aui-multipic-viewer__wrapper > div:first-child:nth-last-child(n+4) ~ div {
    width: 50%;
    height: 50%;
    float: left;
}
</style>