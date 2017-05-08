// https://html.spec.whatwg.org/multipage/webstorage.html#storage
beforeEach(() => {
  localStorage.store = {};
});

// clear
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-clear
test('localstorage.clear', () => {
  const KEY = 'foo', VALUE = 'bar';
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.store[KEY]).toBe(VALUE);
  expect(Object.keys(localStorage.store).length).toBe(1);
  localStorage.clear();
  expect(Object.keys(localStorage.store).length).toBe(0);
  expect(localStorage.store[KEY]).toBeUndefined();
  localStorage.setItem(KEY, VALUE);
  localStorage.clear();
  expect(Object.keys(localStorage.store).length).toBe(0);
  expect(localStorage.store[KEY]).toBeUndefined();
});

// setItem
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-setitem
test('localstorage.setItem', () => {
  const KEY = 'foo', VALUE1 = 'bar', VALUE2 = 'baz';
  localStorage.setItem(KEY, VALUE1);
  expect(localStorage.store[KEY]).toBe(VALUE1);
  localStorage.setItem(KEY, VALUE2);
  expect(localStorage.store[KEY]).toBe(VALUE2);
});

// getItem
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-getitem
test('localstorage.getItem', () => {
  const KEY = 'foo', VALUE1 = 'bar', VALUE2 = 'baz';
  localStorage.setItem(KEY, VALUE1);
  expect(localStorage.getItem(KEY)).toBe(VALUE1);
  localStorage.setItem(KEY, VALUE2);
  expect(localStorage.getItem(KEY)).toBe(VALUE2);
  expect(localStorage.getItem('does not exist')).toBeNull();
});

// removeItem
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-removeitem
test('localstorage.removeItem', () => {
  const KEY = 'foo', VALUE1 = 'bar', VALUE2 = 'baz';
  localStorage.setItem(KEY, VALUE1);
  expect(localStorage.getItem(KEY)).toBe(VALUE1);
  localStorage.removeItem(KEY);
  expect(localStorage.getItem(KEY)).toBeNull();
  localStorage.setItem(KEY, VALUE2);
  localStorage.removeItem(KEY);
  expect(localStorage.getItem(KEY)).toBeNull();
  localStorage.removeItem('not a key'); // does not throw
});

// length
// ttps://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-length
test('localstorage set and remove', () => {
  const KEY1 = 'foo', VALUE = 'bar', KEY2 = 'baz';
  expect(localStorage.length).toBe(0);
  localStorage.setItem(KEY1, VALUE);
  expect(localStorage.length).toBe(1);
  localStorage.setItem(KEY2, VALUE);
  expect(localStorage.length).toBe(2);
  localStorage.clear();
  expect(localStorage.length).toBe(0);
});

// key
// https://html.spec.whatwg.org/multipage/webstorage.html#dom-storage-key
test('localstorage.key', () => {
  const KEY = 'foo', VALUE = 'bar';
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.getItem(KEY)).toBe(VALUE);
  expect(localStorage.key(0)).toBe(KEY);
  expect(localStorage.length).toBe(1);
  expect(localStorage.key(1)).toBeNull();
});
