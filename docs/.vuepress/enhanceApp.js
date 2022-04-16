import '@agree/aui-web/lib/theme-default/index.css'
export default async ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData, // site metadata
    isServer,
}) => {
    Vue.mixin({
        mounted() {
            //根组件引入aui,解决node编译window is undefine
            if (this.$el.id === 'app')
            import('@agree/aui-web').then(AUI => {
                Vue.use(AUI.default)
            })
        },
    })
}