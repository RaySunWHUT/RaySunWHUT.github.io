# 捕捉错误
set -e

# 进入生成的文件夹
cd src/.vuepress/dist

# 发布到github
git init
git add .
git commit -m 'deploy'
git push -f git@github.com:RaySunWHUT/RaySunWHUT.github.io.git master:gh-pages

cd -