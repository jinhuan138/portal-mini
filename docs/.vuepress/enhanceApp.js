import '@agree/aui-web/lib/theme-default/index.css'
import AuiPicviewer from './components/picviewer/index';
import AuiPdf from './components/pdf/index';
import routes from './router'
import apollo from './apollo'
export default async ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
    isServer,
}) => {
    [AuiPicviewer, AuiPdf].forEach(component => {
        Vue.component(component.name, component)
    })
    //解决编译失败 Element is undefined
    if (!isServer) {
        await import('@agree/aui-web').then(AUI => {
            Vue.use(AUI.default);
        });
        routes.forEach(i => {
            router.addRoute(i)
        })
    }
    Vue.prototype.$apollo = apollo
}