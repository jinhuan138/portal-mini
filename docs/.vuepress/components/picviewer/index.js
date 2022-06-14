import AuiPicviewer from "./picviewer.vue";

AuiPicviewer.install = function(Vue) {
    Vue.component(AuiPicviewer.name, AuiPicviewer)
}

export default AuiPicviewer