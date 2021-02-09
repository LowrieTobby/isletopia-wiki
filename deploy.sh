echo "deploy.sh started!"
# 查询环境版本
node -v
npm -v
docker -v

#停止和删除上一个版本wiki
docker stop isletopia-wiki
docker rm isletopia-wiki

# 执行安装
npm install

# 生成静态文件
npm run docs:build