module.exports = {
  title: 'Vueel UI',
  description: '基于 Vue2.6 的UI',
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ['link', {rel: 'icon', href: '/images/favicon.png'}]
  ],
  dest: './dist',
  base: '/vueel-demo-website/',
  // 代码块显示行号
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 左上角logo
    logo: '/images/Logo.jpg',
    sidebarDepth: 0,
    // 导航栏配置
    nav: [
      {text: '首页', link: '/'},
      {text: '起步', link: '/introduction/'},
    ],
    // 侧边栏配置
    sidebar: [
      {
        title: 'UI 介绍',
        path: '/introduction/',
      },
      {
        title: '安装使用',
        path: '/installation/',
      },
      {
        title: '组件',
        path: '/components-docs/',
        collapsable: false,
        sidebarDepth: 3,
        initialOpenGroupIndex: -1,
        children: [],
      },
      {
        title: '技术栈',
        path: '/tech/',
      },
    ],
    // 文档更新时间：每个文件git最后提交的时间
    lastUpdated: 'Last Updated',
    displayAllHeaders: false,
    searchMaxSuggestions: 10
  },
  plugins: [
    [
      '@vssue/vuepress-plugin-vssue',
      {
        platform: 'github-v4',
        owner: 'xmasuhai',
        repo: 'vueel-website-vssue',
        clientId: '63cb0091b6a9f4eac236',
        clientSecret: 'f3f9ae5ba6a36647a2854dd0b10e635ccbdbf363',
        locale: 'zh',
        autoCreateIssue: true,
      }
    ],
    '@vuepress/back-to-top',
    'demo-container',
    [
      'vuepress-plugin-typescript',
      {
        // ts-loader 的所有配置项
        tsLoaderOptions: {}
      }
    ]
  ],
  smoothScroll: true,
  // serviceWorker: true,
  evergreen: true, // 不支持IE
}
