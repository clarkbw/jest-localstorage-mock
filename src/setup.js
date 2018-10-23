import { LocalStorage } from './localstorage';

if (typeof global._localStorage !== 'undefined') {
  Object.defineProperty(global, '_localStorage', {
    value: new LocalStorage(jest),
    writable: false,
  });
} else {
  global.localStorage = new LocalStorage(jest);
}

if (typeof global._sessionStorage !== 'undefined') {
  Object.defineProperty(global, '_sessionStorage', {
    value: new LocalStorage(jest),
    writable: false,
  });
} else {
  global.sessionStorage = new LocalStorage(jest);
}
