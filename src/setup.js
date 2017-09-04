import { LocalStorage } from './localstorage';

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
  },
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
    },
};
