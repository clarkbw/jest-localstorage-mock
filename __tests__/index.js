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
