import { LocalStorage } from './localstorage';

Object.defineProperty(global, '_localStorage', {
  value: new LocalStorage(jest),
});
Object.defineProperty(global, '_sessionStorage', {
  value: new LocalStorage(jest),
});
