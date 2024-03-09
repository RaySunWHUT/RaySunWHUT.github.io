---
title: “docker启动后自动退出”解决办法
category:
  - 中间件
tag:
  - docker
date: 2023-07-30
---

## 现象描述
执行命令run一个容器(container)，容器生成后发现既没有任何报错也没有消息提示，就自动关闭。
```bash
docker run --name="容器名" [镜像(Image)名] 
```

## 解决方案
1. 添加 -it参数
2. 方案1无效，则在-it参数后在命令最后加上/bin/bash
```bash
docker run -it --name="容器名" [镜像(Image)名]
```

方案1无效解决方案
```bash
docker run -it --name="容器名" [镜像(Image)名] /bin/bash
```

## 参考文献
1. https://blog.csdn.net/haokelaicds/article/details/124961973?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-124961973-blog-94554897.235^v38^pc_relevant_default_base&spm=1001.2101.3001.4242.1&utm_relevant_index=3
