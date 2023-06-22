# 捕捉错误
set -e

# 进入生成的文件夹dist
cd src/.vuepress/dist

# 发布到github
git init
git add -A
git commit -m 'deploy'
# 注意: 为纠正master词义导致的种族歧视历史问题, 故github官方对于已有仓库保持'master'作为主分支名称
# 而对于新建仓库则强制将github仓库主分支命名为main
# ps: 注意此处为什么要push main:gh-pages, 详见根目录.gitignore
git push -f git@github.com:RaySunWHUT/RaySunWHUT.github.io.git main:gh-pages

# 返回到上一次所在目录, 与 cd .. 不同
cd -