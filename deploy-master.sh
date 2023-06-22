#！/bin/bash
# 捕捉错误
set -e

printf "=== 开始执行 $0 脚本 ===\n"
printf "本次提交的commt信息为: $1 \n"
# 发布到github
git add .
git commit -m "$1"
git push -f git@github.com:RaySunWHUT/RaySunWHUT.github.io.git master

printf "=== $0 脚本执行结束 ===\n"