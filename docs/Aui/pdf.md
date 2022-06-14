## Pdf 可移植文档

### 基础用法


:::demo

```html
<template>
	<aui-pdf :src="pdfSrc" :css="pdfCss" :rootPath="root" :port="port" :allowFullScreen="allowFullScreen">
	</aui-pdf>
</template>
<script>
  export default {
    data() {
      return {
        pdfSrc: 'test.pdf',
        pdfCss: 'width:50%;height:600px',
        root:'testrootpath',
        port:'53202',
        allowFullScreen:true
      }
    },
  }
</script>
```
:::

### Attributes
| name | 说明 |
|------|--------|
| pdfSrc | pdf文件路径 |
| pdfCss | pdf展示区域样式 |
| rootPath | 客户端根路径 |
| port | 客户端配置的web端口 |
| allowFullScreen | 是否允许pdf最大化全屏展示 |
