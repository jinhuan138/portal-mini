module.exports = {
    title: 'portal',
    dest: './dist',
    theme: 'reco',
    port: '8086',
    locales: {
        '/': {
            lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    markdown: {
        lineNumbers: false
    },
    themeConfig: {
        nav: require('./nav'),
        sidebar: require('./sidebar'),
        sidebarDepth: 2,
        subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        noFoundPageByTencent: false,//404
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    },
    plugins: [
        ['demo-container-v2']
    ]
}
