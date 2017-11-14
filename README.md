Use this module with [Jest](https://facebook.github.io/jest/) to run web tests
that rely on `localstorage` and / or `sessionStorage` where you want a working
localStorage API with mocked functions.

This module has no runtime dependencies so your project won't pull in additional
module dependencies by using this.

[![npm](https://img.shields.io/npm/v/jest-localstorage-mock.svg)](https://www.npmjs.com/package/jest-localstorage-mock)
[![npm](https://img.shields.io/npm/l/jest-localstorage-mock.svg)](https://github.com/clarkbw/jest-localstorage-mock/blob/master/LICENSE)
[![Codecov](https://img.shields.io/codecov/c/github/clarkbw/jest-localstorage-mock.svg)](https://codecov.io/gh/clarkbw/jest-localstorage-mock)
[![Greenkeeper badge](https://badges.greenkeeper.io/clarkbw/jest-localstorage-mock.svg)](https://greenkeeper.io/)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/clarkbw/jest-localstorage-mock.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)

## Install

This should only be installed as a development dependency (`devDependencies`) as
it is only designed for testing. The module is transpiled via
[babel](https://github.com/babel/babel) to support the current active Node LTS
version (6.11.3).

yarn:

```bash
yarn add --dev jest-localstorage-mock
```

npm:

```bash
npm i --save-dev jest-localstorage-mock
```

## Setup

The simplest setup is to use the [module](#module) system, you may also choose
to create a [setup file](#setup-file) if needed.

### Module

In your `package.json` under the `jest`
[configuration section](https://facebook.github.io/jest/docs/en/configuration.html#content)
create a `setupFiles` array and add `jest-localstorage-mock` to the array.

```json
{
  "jest": {
    "setupFiles": ["jest-localstorage-mock"]
  }
}
```

If you already have a `setupFiles` attribute you can also append
`jest-localstorage-mock` to the array.

```json
{
  "jest": {
    "setupFiles": ["./__setups__/other.js", "jest-localstorage-mock"]
  }
}
```

### Setup file

Alternatively you can create a new setup file which then requires this module or
add the `require` statement to an existing setup file.

`__setups__/localstorage.js`

```js
import 'jest-localstorage-mock';
// or
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

For a [create-react-app](https://github.com/facebookincubator/create-react-app)
project you can replace the
[suggested mock](https://github.com/facebookincubator/create-react-app/tree/master/packages/react-scripts/template#srcsetuptestsjs-1)
with this at the beginning of the existing `src/setupTests.js` file:

```js
require('jest-localstorage-mock');
```

## In tests

By including this in your Jest setup you'll allow tests that expect a
`localStorage` and `sessionStorage` object to continue to run. The module can
also allow you to use the mocks provided to check that your localStorage is
being used as expected.

The `__STORE__` attribute of `localStorage.__STORE__` or
`sessionStorage.__STORE__` is made available for you to directly access the
storage object if needed.

### Test Examples

Check that your `localStorage` calls were made when they were supposed to.

```js
test('should save to localStorage', () => {
  const KEY = 'foo',
    VALUE = 'bar';
  dispatch(action.update(KEY, VALUE));
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});
```

Check that your `sessionStorage` is empty, examples work with either
`localStorage` or `sessionStorage`.

```js
test('should have cleared the sessionStorage', () => {
  dispatch(action.reset());
  expect(sessionStorage.clear).toHaveBeenCalledTimes(1);
  expect(sessionStorage.__STORE__).toEqual({}); // check store values
  expect(sessionStorage.length).toBe(0); // or check length
});
```

Check that `localStorage` calls were not made when they shouldn't have been.

```js
test('should not have saved to localStorage', () => {
  const KEY = 'foo',
    VALUE = 'bar';
  dispatch(action.notIdempotent(KEY, VALUE));
  expect(localStorage.setItem).not.toHaveBeenLastCalledWith(KEY, VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(0);
});
```

Reset your `localStorage` data and mocks before each test to prevent leaking.

```js
beforeEach(() => {
  // values stored in tests will also be available in other tests unless you run
  localStorage.clear();
  // or directly reset the storage
  localStorage.__STORE__ = {};
  // you could also reset all mocks, but this could impact your other mocks
  jest.resetAllMocks();
  // or individually reset a mock used
  localStorage.setItem.mockClear();
});

test('should not impact the next test', () => {
  const KEY = 'foo',
    VALUE = 'bar';
  dispatch(action.update(KEY, VALUE));
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});

test('should not be impacted by the previous test', () => {
  const KEY = 'baz',
    VALUE = 'zab';
  dispatch(action.update(KEY, VALUE));
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(1);
});
```

See the [contributing guide](./CONTRIBUTING.md) for details on how you can
contribute.
