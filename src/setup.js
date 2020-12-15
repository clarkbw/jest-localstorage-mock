import { createStorage } from './localstorage';

if (typeof global._localStorage !== 'undefined') {
  Object.defineProperty(global, '_localStorage', {
    value: createStorage(jest),
    writable: false,
  });
} else {
  global.localStorage = createStorage(jest);
}

if (typeof global._sessionStorage !== 'undefined') {
  Object.defineProperty(global, '_sessionStorage', {
    value: createStorage(jest),
    writable: false,
  });
} else {
  global.sessionStorage = createStorage(jest);
}
