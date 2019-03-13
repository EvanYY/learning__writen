# docker加node github 前端自动化部署

# intruduce docker
##  dockerfile1
- FROM alpine: latest |  我要产生的镜像的运行的基础镜像 类似于一种基础类
- MAINTAINER xbf
- CMD echo "hello docker" | 运行的命令

## dockerfile2
- FROM ubuntu
- MINTINER xbf
- RUN sed -i 's/archive.ubuntu.com/mirros.ustc.edu.cn/g' /etc/apt/sources.list
- RUN apt-get update
- RUN apt-get install -y nginx
- COPY index.html /var/www/html
- ENTRYPOINT ["/usr/sbin/nginx","-g", "daemon off;"]     注：让nginx在前台启动而不是作为守护进程使用
- EXPOSE 80   暴露80端口