export class LocalStorage  {
    constructor() {
        Object.defineProperty(this, "getItem", {
            enumerable: false,
            value: jest.fn((key) => {return this[key] || null })

        });
        Object.defineProperty(this, "setItem", {
            enumerable: false,
            value: jest.fn((key, val = '') => {
                this[key] = val + '';
            })
        });
        Object.defineProperty(this, "removeItem", {
            enumerable: false,
            value: jest.fn((key) => {
                delete this[key];
            })
        });
        Object.defineProperty(this, "clear", {
            enumerable: false,
            value: jest.fn(() => {
                Object.keys(this).map(key => delete this[key]);

            })
        });
        Object.defineProperty(this, "toString", {
            enumerable: false,
            value: jest.fn(() => {
                return "[object Storage]"

            })
        });
        Object.defineProperty(this, "key", {
            enumerable: false,
            value: jest.fn((idx) => {
                return Object.keys(this)[idx] || null
            })
        });

    } // end constructor

    get length() {
        return Object.keys(this).length
    }

    get __STORE__() {
        return this
    }

}

