# Isletopia Wiki

![build-status](https://img.shields.io/jenkins/build?jobUrl=http%3A%2F%2Fhub.isletopia.net%2Fjenkins%2Fview%2Fweb%2Fjob%2Fisletopia-wiki%2F)
![vuepress-versoin](https://img.shields.io/badge/vuepress-1.8.1-blue)
![npm-versoin](https://img.shields.io/badge/npm-6.13.7-blue)

> [Isletopia](https://isletopia.net/) 是由 [Molean](https://github.com/cnMolean) 与其团队创立的一个 Minecraft 服务器
>
> 这里是此文档项目的源码仓库。如果要阅读此文档原文，请访问 http://wiki.isletopia.net/



## 介绍

为了方便服务器内玩家们查阅服务器相关规则、教程、合成配方等信息，Isletopia Wiki 将提供服务器最全面的信息资讯以及教程内容

Isletopia Wiki 基于 `vuepress` 博客框架进行开发



## 帮助我们改进

Isletopia Wiki 还在完善当中，如果你有更好的想法或者建议，欢迎帮助我们改进



## 如何修改文档

### 运行环境

该项目是基于 `vuepress` 开发的，因此在 `clone` 该项目之前，确保你安装了如下环境

- `npm` - 6.13.7 或更新版本
- `vuepress` - 1.8.1或更新版本



### 下载与运行

#### 下载

首先fork该项目到自己的仓库

点击右上角 clone 按钮下载该项目所有文件到本地

使用任何IDE打开该项目



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

- 中文文档路径 `/docs/guide`

- 英文文档路径 `/docs/en/guide`

