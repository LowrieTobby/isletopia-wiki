const sidebar = require('./sidebarConfig')

module.exports = {

  // logo: '/assets/img/logo.svg',

  // 是否启用滑动特效
  smoothScroll: true,

  // I18n
  locales: {

    // 中文(默认)
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
        { text: '简介', link: '/guide/introduction.html' },
        { text: '常见问题', link: '/guide/faq.html' },
        {
          text: '指南', items: [
            { text: '新手教学', link: '/guide/tutorial.html' },
            { text: '材料获取', link: '/guide/material.html' },
            { text: '魔改内容', link: '/guide/modification.html' },
          ]
        },
        { text: '首页', link: 'http://isletopia.net' }
      ],
      sidebar: {
        collapsable: true,
        '/guide/': sidebar,
      },
      lastUpdated: '更新于',
    },

    // 英文
    // '/en/': {
    //   selectText: 'Languages',
    //   label: 'English',
    //   ariaLabel: 'Languages',
    //   editLinkText: 'Edit this page on GitHub',
    //   serviceWorker: {
    //     updatePopup: {
    //       message: "New content is available.",
    //       buttonText: "Refresh"
    //     }
    //   },
    //   algolia: {},
    //   nav: [
    //     { text: 'Introduction', link: '/en/guide/introduction.html' },
    //     { text: 'FAQ', link: '/en/guide/faq.html' },
    //     {
    //       text: 'Guide', items: [
    //         { text: 'Tutorial', link: '/en/guide/tutorial.html' },
    //         { text: 'Material', link: '/en/guide/material.html' },
    //         { text: 'Modification', link: '/en/guide/modification.html' },
    //       ]
    //     },
    //     { text: 'Home', link: 'http://isletopia.net' }
    //   ],
    //   sidebar: {
    //     collapsable: true,
    //     '/en/guide/': [
    //       'introduction',
    //       'tutorial',
    //       'material',
    //       'modification',
    //       'faq'
    //     ],
    //   },
    // }
  },

  // 仓库设置
  // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
  repo: 'LowrieTobby/isletopia-wiki',
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  repoLabel: false,

  // 以下为可选的编辑链接选项

  // 假如你的文档仓库和项目本身不在一个仓库：
  docsRepo: 'LowrieTobby/isletopia-wiki',
  // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // 假如文档放在一个特定的分支下：
  docsBranch: 'master',
  // 默认是 false, 设置为 true 来启用
  editLinks: false,
}