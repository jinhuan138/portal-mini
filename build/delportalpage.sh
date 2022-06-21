# 确保脚本抛出遇到的错误
set -e

# 删除dist
cd ..
rm -rf ./dist

# 新建dist
mkdir ./dist && cd ./dist

# 新建README.md
echo '# Hello VuePress' > ./README.md

# 发布
git init
git add .
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:jinhuan138/portal.git master:master

