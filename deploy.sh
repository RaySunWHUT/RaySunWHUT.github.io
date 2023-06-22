# 捕捉错误
set -e

# 进入生成的文件夹dist
cd src/.vuepress/dist

# 发布到github
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:RaySunWHUT/RaySunWHUT.github.io.git main:gh-pages

cd -