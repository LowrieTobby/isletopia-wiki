import { defaultTheme, defineUserConfig } from 'vuepress'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { getDirname, path } from '@vuepress/utils'
const __dirname = getDirname(import.meta.url)
import { searchPlugin } from '@vuepress/plugin-search'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'
import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import { seoPlugin } from "vuepress-plugin-seo2";

export default defineUserConfig({

    // 基本设置
    base: '/',
    title: '梦幻之屿 Wiki',
    description: '欢迎来到 梦幻之屿 Wiki 主页',
    lang: 'zh-CN',
    head: [
        // PWA Settings
        // ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        // ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        // ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/logo.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }],

        ['link', { rel: 'icon', href: '/logo.png' }],
        ['meta', { name: 'keywords', content: '梦幻之屿,isletopia,我的世界,minecraft,mc,空岛,纯净,' }],
        ['meta', { name: 'description', content: '梦幻之屿,isletopia,我的世界,minecraft,mc,空岛,纯净,' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ],

    // 插件设置
    plugins: [
        // 自动注册组件
        registerComponentsPlugin({
            componentsDir: path.resolve(__dirname, './components'),
        }),
        // 全局搜索
        searchPlugin({
            locales: {
                '/': { placeholder: '全局搜索' }
            },
        }),
        // 换页显示进度条
        nprogressPlugin(),
        // 图片浏览器
        photoSwipePlugin(),
        // SEO优化
        seoPlugin({
            hostname: "https://wiki.islet.world/",
            autoDescription: true,
        }),
    ],


    // 主题设置
    theme: defaultTheme({
        navbar: [
            { text: '首页', link: '/#' },
            { text: '服务器简介', link: '/introduction.html' },
            { text: '常见问答', link: 'faq.html' },
            // { text: '合成表', link: '/recipes.html' },
            {
                text: 'Wiki',
                children: [
                    {
                        text: '玩家手册',
                        children: [
                            { text: '游戏规则', link: '/guide/rules.html' },
                            { text: '新手教学', link: '/guide/tutorial.html' },
                            { text: '魔改内容', link: '/guide/modification.html' },
                            { text: '特殊机制', link: '/guide/mechanism.html' },

                        ]
                    },
                    {
                        text: '其他',
                        children: [
                            { text: '特色系统', link: '/guide/feature.html' },
                            { text: '社团', link: '/guide/club.html' },
                        ]

                    }
                ]
            },
            {
                text: '相关链接',
                children: [
                    { text: '捐助', link: 'https://afdian.net/@molean' },
                    { text: 'MCBBS宣传贴', link: 'http://mcbbs.islet.world' },
                ]
            },
        ],

        // lastUpdated: true,
        contributors: false,
        lastUpdatedText: "更新于",
        // contributorsText: "发布者",

        // 主题自带插件配置
        themePlugins: { mediumZoom: false }

    }),


})