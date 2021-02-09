echo "deploy.sh started!"
# 查询环境版本
node -v
npm -v

#删除之前的文件
rm -rf docs/.vuepress/dist/

# 执行安装
npm install

# 生成静态文件
npm run docs:build

echo "finished!"