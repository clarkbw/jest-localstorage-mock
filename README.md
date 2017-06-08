
Use this module with [Jest](https://facebook.github.io/jest/) to run web tests that rely on `localstorage` where you want a working localStorage like API and mocked localStorage functions.

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

## In tests

By including this in your Jest setup you'll allow tests that expect a `localStorage` object to continue to run.  The module can also allow you to use the mocks provided to check that your localStorage is being used as expected.

The `__STORE__` attribute of `localStorage.__STORE__` is made available for you to directly access the localStorage object if needed.

### Test Examples

Check that your `localStorage` calls were made when they were supposed to.

```js
test('should save to localStorage', () => {
  const KEY = 'foo', VALUE = 'bar';
  dispatch(action.update(KEY, VALUE));
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});
```

Check that your storage is empty.

```js
test('should have cleared the localStorage', () => {
  dispatch(action.reset());
  expect(localStorage.clear).toHaveBeenCalledTimes(1);
  expect(localStorage.__STORE__).toEqual({}); // check store values
  expect(localStorage.length).toBe(0); // or check length
});
```

Check that localStorage calls were not made when they shouldn't have been.

```js
test('should not have saved to localStorage', () => {
  const KEY = 'foo', VALUE = 'bar';
  dispatch(action.notIdempotent(KEY, VALUE));
  expect(localStorage.setItem).not.toHaveBeenLastCalledWith(KEY, VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(0);
});
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
npm version `${version}`
npm publish
git push --tags
```
