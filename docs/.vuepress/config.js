module.exports = {
  title: '梦幻之屿 - 手册',
  description: '梦幻之屿帮助手册主页',
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'zh-CN',
      title: '梦幻之屿 - 手册',
      description: '梦幻之屿帮助手册主页'
    },
    '/en/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Isletopia - help',
      description: 'Isletopia help center'
    }
  },
  themeConfig: {
    // logo: '/assets/img/logo.svg',
    locales: {
      '/': {
        // 多语言下拉菜单的标题
        selectText: '选择语言',
        // 该语言在下拉菜单中的标签
        label: '简体中文',
        // 编辑链接文字
        editLinkText: '在 GitHub 上编辑此页',
        // Service Worker 的配置
        serviceWorker: {
          updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新"
          }
        },
        // 当前 locale 的 algolia docsearch 选项
        algolia: {},
        nav: [
          { text: '基本介绍', link: '/guide/introduction.html' },
          { text: '常见问题', link: '/guide/faq.html' },
          {
            text: '指南', items: [
              { text: '新手教学', link: '/guide/tutorial.html' },
              { text: '材料获取', link: '/guide/get-items.html' },
              { text: '魔改内容', link: '/guide/modification.html' },
            ]
          },
          { text: '首页', link: 'http://isletopia.net' }
        ],
        sidebar: {
          collapsable: true,
          '/guide/': [
            'introduction',
            'tutorial',
            'get-items',
            'modification',
            'faq'
          ],
          '/': [
            ''
          ]
        },
        lastUpdated: '更新于',
      },
      '/en/': {
        selectText: 'Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        algolia: {},
        nav: [
          { text: 'Introduction', link: '/en/guide/introduction.html' },
          { text: 'FAQ', link: '/en/guide/faq.html' },
          {
            text: 'Guide', items: [
              { text: 'Tutorial', link: '/en/guide/tutorial.html' },
              { text: 'Get items', link: '/en/guide/get-items.html' },
              { text: 'Modification', link: '/en/guide/modification.html' },
            ]
          },
          { text: 'Home', link: 'http://isletopia.net' }
        ],
        sidebar: {
          collapsable: true,
          '/en/guide/': [
            'introduction',
            'tutorial',
            'get-items',
            'modification',
            'faq'
          ],
          '/': [
            ''
          ]
        },
      },
    },
    // sidebar: {
    //   collapsable: true,
    //   '/zh/guide/': [
    //     '',
    //     '新手教学',
    //     '材料获取',
    //     '魔改内容',
    //     '常见问题'
    //   ],
    //   '/': [
    //     ''
    //   ]
    // },
    smoothScroll: true,
  }
}