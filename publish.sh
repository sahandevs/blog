#!/bin/bash
npm run build
shopt -s extglob
cd ../blog-build && rm -rf -v !(".git"|"CNAME")
shopt -u extglob

cd ../blog && cp -r ./public/* ../blog-build

cd ../blog-build && git add . && git commit --message "build $(date)" && git push


echo "https://github.com/sahandevs/blog/deployments/github-pages"
echo "https://sahand.blog"