[![npm](https://img.shields.io/npm/v/jest-localstorage-mock.svg)](https://www.npmjs.com/package/jest-localstorage-mock) [![npm](https://img.shields.io/npm/l/jest-localstorage-mock.svg)](https://github.com/clarkbw/jest-localstorage-mock/blob/master/LICENSE) [![Codecov](https://img.shields.io/codecov/c/github/clarkbw/jest-localstorage-mock.svg)](https://codecov.io/gh/clarkbw/jest-localstorage-mock) [![Greenkeeper badge](https://badges.greenkeeper.io/clarkbw/jest-localstorage-mock.svg)](https://greenkeeper.io/) [![Twitter](https://img.shields.io/twitter/url/https/github.com/clarkbw/jest-localstorage-mock.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

## Install

For yarn:

```bash
yarn add --dev jest-localstorage-mock
```

For npm:

```bash
npm i --save-dev jest-localstorage-mock
```

## Setup

### Require module directly

In your `package.json` under the `jest` section add the `setupFiles` attribute with this module name.

```json
"jest": {
  "setupFiles": [
    "jest-localstorage-mock"
  ]
}
```

### Use setup file

Alternatively you can create a new setup file and require this module.

`__setups__/localstorage.js`
```js
global.chrome = require('jest-localstorage-mock');
```

And add that file to your `setupFiles`:

```json
"jest": {
  "setupFiles": [
    "./__setups__/localstorage.js"
  ]
}
```

## Usage

With this module setup in Jest you can run your web tests that rely on `localstorage` without fail.

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
