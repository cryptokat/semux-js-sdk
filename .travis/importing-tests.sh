#!/usr/bin/env bash

npm install --global typescript
npm link
rm -rf ../importing-test/
cp -Rf test/import ../importing-test/
cd ../importing-test
npm link semux

echo "Testing Multi Exports in Typescript..."
tsc --esModuleInterop ./typescript-multi-exports.ts && node ./typescript-multi-exports.js

echo "Testing Default Export in Typescript..."
tsc --esModuleInterop ./typescript-default-export.ts && node ./typescript-default-export.js

echo "Testing Wildcard Importing in Typescript..."
tsc --esModuleInterop ./typescript-wildcard.ts && node ./typescript-wildcard.js

echo "Testing Multi Exports in Nodejs..."
node ./nodejs-multi-exports.js

echo "Testing Default Export in Typescript..."
node ./nodejs-default-export.js