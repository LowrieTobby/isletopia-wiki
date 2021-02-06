const sidebarConfig = require('./configs/sidebarConfig');
const pluginConfig = require('./configs/pluginsConfig');
const headConfig = require('./configs/headConfig');

module.exports = {
  // 基本信息
  base: '/',
  title: '梦幻之屿 - 手册',
  head: headConfig,
  description: '梦幻之屿帮助手册主页',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '梦幻之屿 Wiki',
      description: '欢迎来到梦幻之屿 Wiki 主页'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Isletopia Wiki',
      description: 'Welcome to Isletopia Wiki Page'
    }
  },

  plugins: pluginConfig,

  // 主题设置
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
          { text: '简介', link: '/guide/introduction.html' },
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
        sidebar: sidebarConfig,
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
        sidebar: sidebarConfig
      },
    },
    smoothScroll: true,

    // 仓库信息
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'LowrieTobby/isletopia-docs',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: false,

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'LowrieTobby/isletopia-docs',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
  },
}