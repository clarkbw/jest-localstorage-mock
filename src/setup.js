import { LocalStorage } from './localstorage';

const local = new LocalStorage();
const session = new LocalStorage();

global.localStorage = local;
global.sessionStorage = session;


