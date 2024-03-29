# 梦幻之屿 Wiki

Isletopia Wiki

![build-status](https://img.shields.io/jenkins/build?jobUrl=http%3A%2F%2F110.42.226.19:9080%2Fjenkins%2Fview%2Fweb%2Fjob%2Fisletopia-wiki%2F)
[![vuepress-versoin](https://img.shields.io/badge/vuepress-2.x-blue)](https://v2.vuepress.vuejs.org)
[![npm](https://img.shields.io/npm/v/vuepress/next)](https://www.npmjs.com/package/vuepress)
![node-current](https://img.shields.io/node/v/vuepress-next)
> 梦幻之屿 [Isletopia](http://wiki.islet.world/introduction.html#%E4%BB%80%E4%B9%88%E6%98%AF%E6%A2%A6%E5%B9%BB%E4%B9%8B%E5%B1%BF) 是由 [Molean](https://github.com/cnMolean) 与其团队创立的一个 Minecraft 服务器
>
> 这里是此文档项目的源码仓库。如果要完整阅读此文档原文，请访问 http://wiki.islet.world/



## 介绍

为了方便服务器内玩家们查阅服务器相关规则、教程、合成配方等信息，Isletopia Wiki 将提供服务器最全面的信息资讯以及教程内容

Isletopia Wiki 基于 `vuepress 2.x` 博客框架进行开发



## 计划与完成度

### 板块完成度

| 板块                     | 完成度               | 备注                                       |
| ------------------------ | -------------------- | ------------------------------------------ |
| 首页 (/)             | 已完成，持续完善中   | Wiki 欢迎页，板块导航，服务器信息          |
| 简单介绍 (/introduction) | 已完成，持续完善中   | 服务器简介                                 |
| 常见问题 (/faq)          | 已完成，持续完善中   | 服务器中常见的问题以及解决方法             |
| 玩家手册 (/guide)        | 正在编辑，持续完善中 | 提供玩家最全面的服务器相关信息             |

### 计划添加内容

- [ ] 新合成表板块
- [ ] FAQ 评论通道
- [x] 夜间模式
- [ ] 展示捐助者名单
- [ ] PWA功能
- [ ] 添加图片说明



## 帮助我们改进

梦幻之屿 Wiki 还在完善当中，如果你有更好的想法或者建议，欢迎帮助我们改进



## 如何修改文档

### 运行环境

该项目是基于 `vuepress` 开发的，因此在 `clone` 该项目之前，确保你安装了如下环境

- `npm` - 8.x 或更新版本
- `vuepress` - 2.x 或更新版本



### 下载与运行

#### 下载

首先fork该项目到自己的仓库

点击右上角 clone 按钮下载该项目所有文件到本地

使用任何IDE打开该项目，推荐使用 [vscode](https://code.visualstudio.com) IDE



#### 安装

安装该项目所需的依赖

```bash
npm install
```



#### 运行

编译并运行该项目

```bash
npm run docs:dev
```

编译成功后可以在本机地址 http://localhost:8080/ 实时查看文档修改后的效果



#### 修改文档

所有文档存放目录均在 `/docs/` 目录下


#### 文档结构

```
|-- docs
    |-- club.md					// 社团制度
    |-- faq.md					// 常见问题
    |-- feature.md				// 特色系统
    |-- introduction.md			// 简介
    |-- README.md				// wiki主页 (index)
    |   |-- 2021-07-20.md
    |   |-- 2021-07-21.md
    |   |-- bump.md
    |   |-- studybump.md
    |   |-- README.md			// 活动页面主页
    |-- guide					// 玩家手册 (该文件夹存放所有玩家手册相关内容)
        |-- mechanism.md		// 特殊机制
        |-- modification.md		// 魔改内容
        |-- rules.md			// 游戏规则
        |-- tutorial.md			// 新手教学
```


