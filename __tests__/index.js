beforeEach(() => {
  localStorage.clear();
});

test('localstorage clear', () => {
  const KEY = 'foo', VALUE = 'bar';
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.getItem(KEY)).toBe(VALUE);
  localStorage.clear();
  expect(localStorage.getItem(KEY)).toBeNull();
});

test('localstorage set and get', () => {
  const KEY = 'foo', VALUE = 'bar';
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.getItem(KEY)).toBe(VALUE);
});

test('localstorage set, overwrite, and get', () => {
  const KEY = 'foo', VALUE1 = 'bar', VALUE2 = 'baz';
  localStorage.setItem(KEY, VALUE1);
  expect(localStorage.getItem(KEY)).toBe(VALUE1);
  localStorage.setItem(KEY, VALUE2);
  expect(localStorage.getItem(KEY)).toBe(VALUE2);
});

test('localstorage set, overwrite, and get', () => {
  const KEY = 'foo', VALUE1 = 'bar', VALUE2 = 'baz';
  localStorage.setItem(KEY, VALUE1);
  expect(localStorage.getItem(KEY)).toBe(VALUE1);
  localStorage.setItem(KEY, VALUE2);
  expect(localStorage.getItem(KEY)).toBe(VALUE2);
});

test('localstorage set and remove', () => {
  const KEY = 'foo', VALUE = 'bar';
  localStorage.setItem(KEY, VALUE);
  expect(localStorage.getItem(KEY)).toBe(VALUE);
  localStorage.removeItem(KEY);
  expect(localStorage.getItem(KEY)).toBeNull();
});

test('localstorage set and remove', () => {
  const KEY1 = 'foo', VALUE = 'bar', KEY2 = 'baz';
  localStorage.setItem(KEY1, VALUE);
  expect(localStorage.getItem(KEY1)).toBe(VALUE);
  expect(localStorage.length).toBe(1);
  localStorage.setItem(KEY2, VALUE);
  expect(localStorage.getItem(KEY2)).toBe(VALUE);
  expect(localStorage.length).toBe(2);
});
