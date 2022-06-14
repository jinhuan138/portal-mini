<!--
 * @Description: 
 * @Author: 赵尔倩 zhaoerqian@agree.com.cn
 * @Date: 2021-12-28 17:40:29
-->
<template>
  <div class="aui-pdf">
    <iframe frameborder="0"
            scrolling="no"
            :style="css"
            :src="path"
            @load="onLoad"
            ref="pdf-iframe">
    </iframe>
  </div>
</template>
<script>
export default {
  name: 'AuiPdf',
  data() {
    return {
      mode: {},
      path: ''
    };
  },
  props: {
    src: "",
    css:"",
    date:"",
    rootPath:"",
    port:"",
    allowFullScreen: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    async src(newsrc, oldsrc) {
      this.path = await this.getPath();
    }
  },
  methods: {
    onLoad() {
      if (this.allowFullScreen === false || !this.allowFullScreen) {
        let iframeWindow = this.$refs["pdf-iframe"].contentWindow;
        iframeWindow.document.documentElement.webkitRequestFullScreen =
          undefined;
        iframeWindow.document.documentElement.requestFullscreen = undefined;
      }
    },
    getCurrentEnv() {
      let env = '';
      let devReg = /\/\/localhost/g;
      let href = window.location.href;
      if (devReg.test(href)) {
        env = 'DEV';
      }
      return env;
    },
    async getPath() {
      if (this.getCurrentEnv() === 'DEV') {
        let path = this.src.replace(/\\/gi, '/');
        let fileName = path.split('/')[path.split('/').length - 1];
        path = 'http://localhost:' + this.port + '/' + fileName;
        return (
          'http://localhost:' +
          this.port +
          '/pdfJs/web/viewer.html?file=' +
          path +
          '?time=' +
          this.date
        );
      } else {
        return (
          this.rootPath +
          '/webcontext/pdfJs/web/viewer.html?file=file:///' +
          this.src +
          '?time=' +
          this.date
        );
      }
    }
  },
  async mounted() {
    this.path = await this.getPath();
  }
};
</script>
<style scoped>
.aui-pdf {
  min-height: 400px;
}
iframe {
  display: block;
  margin: 0 auto;
}
</style>
