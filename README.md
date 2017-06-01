
Use this module with [Jest](https://facebook.github.io/jest/) to run web tests that rely on `localstorage` without fail.

This module has no runtime dependencies so your project won't pull in additional module dependencies by using this.

[![npm](https://img.shields.io/npm/v/jest-localstorage-mock.svg)](https://www.npmjs.com/package/jest-localstorage-mock) [![npm](https://img.shields.io/npm/l/jest-localstorage-mock.svg)](https://github.com/clarkbw/jest-localstorage-mock/blob/master/LICENSE) [![Codecov](https://img.shields.io/codecov/c/github/clarkbw/jest-localstorage-mock.svg)](https://codecov.io/gh/clarkbw/jest-localstorage-mock) [![Greenkeeper badge](https://badges.greenkeeper.io/clarkbw/jest-localstorage-mock.svg)](https://greenkeeper.io/) [![Twitter](https://img.shields.io/twitter/url/https/github.com/clarkbw/jest-localstorage-mock.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

## Install

This should only be required as a dev dependency when your tests are running.

yarn:

```bash
yarn add --dev jest-localstorage-mock
```

npm:

```bash
npm i --save-dev jest-localstorage-mock
```

## Setup

### Module

In your `package.json` under the `jest` section add the module name to the `setupFiles` array. This is by far the simplest method for using this.

```json
"jest": {
  "setupFiles": [
    "jest-localstorage-mock"
  ]
}
```

You can also append this to the array if you have other setup files.

```json
"jest": {
  "setupFiles": [
    "./__setups__/other.js",
    "jest-localstorage-mock"
  ]
}
```

### Setup file

Alternatively you can create a new setup file which then requires this module or add the `require` statement to an existing setup file.

`__setups__/localstorage.js`
```js
require('jest-localstorage-mock');
```

Add that file to your `setupFiles` array:

```json
"jest": {
  "setupFiles": [
    "./__setups__/localstorage.js"
  ]
}
```

### In create-react-app

For a [create-react-app](https://github.com/facebookincubator/create-react-app) project you can replace the [suggested mock](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts/template#srcsetuptestsjs) with this at the beginning of the existing `src/setupTests.js` file:

```js
require("jest-localstorage-mock");
```

## Development

```
yarn install
yarn test
```

## Pull Request

Before every PR run the following:

```
yarn run prettier
```

## Publish

When publishing a new build, run the following:

```
yarn run prettier
yarn run build
yarn publish
```
