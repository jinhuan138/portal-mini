import AuiPdf from './src/pdf';

/* istanbul ignore next */
AuiPdf.install = function(Vue) {
  Vue.component(AuiPdf.name, AuiPdf);
};

export default AuiPdf;