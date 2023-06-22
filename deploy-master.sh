#！/bin/bash
# 捕捉错误
set -e

printf "=== 执行 $0 脚本 ==="
# 发布到github
git add .
git commit -m "$1"
git push -f git@github.com:RaySunWHUT/RaySunWHUT.github.io.git master

cd -