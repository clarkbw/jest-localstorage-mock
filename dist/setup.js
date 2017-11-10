'use strict';

class LocalStorage {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value = '') {
    // not mentioned in the spec, but we must always coerce to a string
    this.store[key] = value + '';
  }

  removeItem(key) {
    delete this.store[key];
  }

  key(index) {
    const keys = Object.keys(this.store);
    return keys[index] || null;
  }

  get length() {
    return Object.keys(this.store).length;
  }

  toString() {
    return '[object Storage]';
  }
}

const local = new LocalStorage();
const session = new LocalStorage();

global.localStorage = {
  clear: jest.fn(() => local.clear()),
  getItem: jest.fn(key => local.getItem(key)),
  setItem: jest.fn((key, value) => local.setItem(key, value)),
  removeItem: jest.fn(key => local.removeItem(key)),
  key: jest.fn(index => local.key(index)),
  toString: jest.fn(() => local.toString()),
  get __STORE__() {
    return local.store;
  },
  set __STORE__(store) {
    local.store = store;
  },
  get length() {
    return local.length;
  }
};

global.sessionStorage = {
  clear: jest.fn(() => session.clear()),
  getItem: jest.fn(key => session.getItem(key)),
  setItem: jest.fn((key, value) => session.setItem(key, value)),
  removeItem: jest.fn(key => session.removeItem(key)),
  key: jest.fn(index => session.key(index)),
  toString: jest.fn(() => session.toString()),
  get __STORE__() {
    return session.store;
  },
  set __STORE__(store) {
    session.store = store;
  },
  get length() {
    return session.length;
  }
};
//# sourceMappingURL=setup.js.map
