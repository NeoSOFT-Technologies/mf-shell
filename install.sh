#!/bin/bash

declare -a pilets=("application-shell" "authentication-shell" "component-shell")

rm -rf node_modules
rm -f package-lock.json
npm i

for pilet in "${pilets[@]}";
do
    echo ${pilet};
    cd ${pilet};
    rm -rf node_modules
    rm -f package-lock.json
    npm i
    cd ..
done