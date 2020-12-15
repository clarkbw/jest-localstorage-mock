export const createStorage = jest => {
  const storage = Object.create(null);

  const methods = {
    getItem: jest.fn(key => {
      if (key in storage) {
        return storage[key];
      }

      return null;
    }),

    setItem: jest.fn((key, value = '') => {
      storage[key] = value + '';
    }),

    removeItem: jest.fn(key => {
      delete storage[key];
    }),

    clear: jest.fn(() => {
      Object.keys(storage).forEach(key => delete storage[key]);
    }),

    toString: jest.fn(() => '[object Storage]'),

    key: jest.fn(idx => Object.keys(storage)[idx] || null),

    get length() {
      return Object.keys(storage).length;
    },

    get constructor() {
      return {
        name: 'LocalStorage',
      };
    },

    get __STORE__() {
      return { ...storage };
    },
  };

  return new Proxy(storage, {
    get(_, prop) {
      if (prop in methods) {
        return methods[prop];
      }

      return Reflect.get(...arguments);
    },
  });
};
