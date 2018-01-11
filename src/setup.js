import { LocalStorage } from './localstorage';

global.localStorage = new LocalStorage(jest);
global.sessionStorage = new LocalStorage(jest);
