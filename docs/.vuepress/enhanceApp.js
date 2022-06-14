import '@agree/aui-web/lib/theme-default/index.css'
import Test from './components/Test.vue'
import Setting from './components/setting.vue'
import AuiPicviewer from './components/picviewer/index';
import AuiPdf from './components/pdf/index';
import './styles/index.scss'
import apollo from './apollo'
// import aui  from '@agree/aui-web'
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

    router.addRoutes([
        {
            name: "Test",
            path: "/test",
            component: Test,
        },
        {
            name: "settings",
            path: "/settings",
            component: Setting,
        },
    ])
    //解决编译失败 Element is undefined
    if (!isServer) {
        await import('@agree/aui-web').then(AUI => {
            Vue.use(AUI.default);
        });
    }
    Vue.prototype.$apollo = apollo
}