#!/usr/bin/env sh

# 校对node版本
node -v
npm -v

# 执行安装
npm install

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 拷贝部署dist
docker --help  

