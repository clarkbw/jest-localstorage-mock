'use strict';

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();





var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var LocalStorage = function () {
  function LocalStorage() {
    classCallCheck(this, LocalStorage);

    this.store = {};
  }

  createClass(LocalStorage, [{
    key: 'clear',
    value: function clear() {
      this.store = {};
    }
  }, {
    key: 'getItem',
    value: function getItem(key) {
      return this.store[key] || null;
    }
  }, {
    key: 'setItem',
    value: function setItem(key, value) {
      this.store[key] = value;
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      delete this.store[key];
    }
  }, {
    key: 'key',
    value: function key(index) {
      var keys = Object.keys(this.store);
      return keys[index] || null;
    }
  }, {
    key: 'toString',
    value: function toString() {
      return '[object Storage]';
    }
  }, {
    key: 'length',
    get: function get$$1() {
      return Object.keys(this.store).length;
    }
  }]);
  return LocalStorage;
}();

var local = new LocalStorage();
var session = new LocalStorage();

global.localStorage = {
  clear: jest.fn(function () {
    return local.clear();
  }),
  getItem: jest.fn(function (key) {
    return local.getItem(key);
  }),
  setItem: jest.fn(function (key, value) {
    return local.setItem(key, value);
  }),
  removeItem: jest.fn(function (key) {
    return local.removeItem(key);
  }),
  key: jest.fn(function (index) {
    return local.key(index);
  }),
  toString: jest.fn(function () {
    return local.toString();
  }),
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
  clear: jest.fn(function () {
    return session.clear();
  }),
  getItem: jest.fn(function (key) {
    return session.getItem(key);
  }),
  setItem: jest.fn(function (key, value) {
    return session.setItem(key, value);
  }),
  removeItem: jest.fn(function (key) {
    return session.removeItem(key);
  }),
  key: jest.fn(function (index) {
    return session.key(index);
  }),
  toString: jest.fn(function () {
    return session.toString();
  }),
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
