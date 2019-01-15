#! /bin/bash

mkdir -p dist
cp -r public/* dist/
npm run-script build
npx gh-pages -d dist
