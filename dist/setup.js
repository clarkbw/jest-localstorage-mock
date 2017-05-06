'use strict';

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
    value: function setItem(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      this.store[key] = value;
    }
  }, {
    key: 'removeItem',
    value: function removeItem(key) {
      delete this.store[key];
    }
  }, {
    key: 'length',
    get: function get$$1() {
      return Object.keys(this.store).length;
    }
  }]);
  return LocalStorage;
}();

global.localStorage = new LocalStorage();
