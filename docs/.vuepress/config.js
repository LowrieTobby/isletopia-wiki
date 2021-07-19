const pluginConfig = require('./configs/pluginsConfig');
const headConfig = require('./configs/headConfig');
const themeConfig = require('./configs/themeConfig');


module.exports = {

  // 基本设置
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
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'Isletopia Wiki',
    //   description: 'Welcome to Isletopia Wiki Page'
    // }
  },

  // 插件设置
  plugins: pluginConfig,

  // 主题设置
  themeConfig: themeConfig

}