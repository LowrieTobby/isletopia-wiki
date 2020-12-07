module.exports = {
  title: '梦幻之屿 - 手册',
  description: '梦幻之屿帮助中心',
  themeConfig: {
    // logo: '/assets/img/logo.svg',
    nav:[
      {text: '基本介绍',link: '/'},
      {text: '指南', items: [
        {text: '新手教学',link: '/zh/guide/新手教学.html'},
        {text: '材料获取',link: '/zh/guide/材料获取.html'},
        {text: '魔改内容',link: '/zh/guide/魔改内容.html'},
      ]},
      {text: '常见问题',link: '/zh/guide/常见问题.html'},
      {text: '语言设置', items: [
        {text: '简体中文', link: '/zh/guide'},
        {text: 'English', link: '/en/guide'}
      ]}

    ],
    sidebar: 'auto',
    smoothScroll: true
  }
}