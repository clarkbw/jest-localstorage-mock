// https://html.spec.whatwg.org/multipage/webstorage.html#storage
beforeEach(() => {
  localStorage.__STORE__ = {};
  jest.clearAllMocks();
});

// clear
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-clear
test('localstorage.clear', () => {
  const KEY = 'foo', VALUE = 'bar';
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.__STORE__).length).toBe(1);
  localStorage.clear();
  expect(localStorage.clear).toHaveBeenCalledTimes(1);
  expect(Object.keys(localStorage.__STORE__).length).toBe(0);
  expect(localStorage.__STORE__[KEY]).toBeUndefined();
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE);
  localStorage.clear();
  expect(localStorage.clear).toHaveBeenCalledTimes(2);
  expect(Object.keys(localStorage.__STORE__).length).toBe(0);
  expect(localStorage.__STORE__[KEY]).toBeUndefined();
});

// setItem
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-setitem
test('localstorage.setItem', () => {
  const KEY = 'foo', VALUE1 = 'bar', VALUE2 = 'baz';
  localStorage.setItem(KEY, VALUE1);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE1);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE1);
  localStorage.setItem(KEY, VALUE2);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY, VALUE2);
  expect(localStorage.__STORE__[KEY]).toBe(VALUE2);
});

// getItem
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-getitem
test('localstorage.getItem', () => {
  const KEY = 'foo',
    VALUE1 = 'bar',
    VALUE2 = 'baz',
    DOES_NOT_EXIST = 'does not exist';

  localStorage.setItem(KEY, VALUE1);
  expect(localStorage.getItem(KEY)).toBe(VALUE1);
  expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);

  localStorage.setItem(KEY, VALUE2);
  expect(localStorage.getItem(KEY)).toBe(VALUE2);
  expect(localStorage.getItem).toHaveBeenLastCalledWith(KEY);

  expect(localStorage.getItem(DOES_NOT_EXIST)).toBeNull();
  expect(localStorage.getItem).toHaveBeenLastCalledWith(DOES_NOT_EXIST);
});

// removeItem
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-removeitem
test('localstorage.removeItem', () => {
  const KEY = 'foo',
    VALUE1 = 'bar',
    VALUE2 = 'baz',
    DOES_NOT_EXIST = 'does not exist';

  localStorage.setItem(KEY, VALUE1);
  expect(localStorage.getItem(KEY)).toBe(VALUE1);
  localStorage.removeItem(KEY);
  expect(localStorage.removeItem).toHaveBeenLastCalledWith(KEY);

  expect(localStorage.getItem(KEY)).toBeNull();
  localStorage.setItem(KEY, VALUE2);
  localStorage.removeItem(KEY);
  expect(localStorage.removeItem).toHaveBeenLastCalledWith(KEY);

  expect(localStorage.getItem(KEY)).toBeNull();
  localStorage.removeItem(DOES_NOT_EXIST); // does not throw
  expect(localStorage.removeItem).toHaveBeenLastCalledWith(DOES_NOT_EXIST);
});

// length
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-length
// length is not mocked
test('localstorage set and remove', () => {
  const KEY1 = 'foo', VALUE = 'bar', KEY2 = 'baz';
  expect(localStorage.length).toBe(0);
  localStorage.setItem(KEY1, VALUE);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY1, VALUE);
  expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  expect(localStorage.length).toBe(1);
  localStorage.setItem(KEY2, VALUE);
  expect(localStorage.setItem).toHaveBeenLastCalledWith(KEY2, VALUE);
  expect(localStorage.setItem).toHaveBeenCalledTimes(2);
  expect(localStorage.length).toBe(2);
  localStorage.clear();
  expect(localStorage.clear).toHaveBeenCalledTimes(1);
  expect(localStorage.length).toBe(0);
});

// key
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-key
test('localstorage.key', () => {
  const KEY = 'foo', VALUE = 'bar';
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.getItem(KEY)).toBe(VALUE);
  expect(localStorage.key(0)).toBe(KEY);
  expect(localStorage.key).toHaveBeenLastCalledWith(0);
  expect(localStorage.length).toBe(1);
  expect(localStorage.key(1)).toBeNull();
  expect(localStorage.key).toHaveBeenLastCalledWith(1);
});

test('localstorage.toString', () => {
  expect(localStorage.toString()).toEqual('[object Storage]');
  expect(localStorage.toString).toHaveBeenCalledTimes(1);
});
