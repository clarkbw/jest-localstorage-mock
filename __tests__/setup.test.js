import { LocalStorage } from '../src/localstorage';

describe('setup', () => {
  const orignalImpGlobsl = {};

  const setupGloabls = (restore = false) => {
    [
      '_localStorage',
      'localStorage',
      '_sessionStorage',
      'sessionStorage',
    ].forEach(globalKey => {
      if (restore) {
        delete global[globalKey];
        global[globalKey] = orignalImpGlobsl[globalKey];
      } else {
        orignalImpGlobsl[globalKey] = global[globalKey];
        delete global[globalKey];
      }
    });
  };

  const restoreGlobals = () => setupGloabls(true);

  beforeEach(() => {
    setupGloabls();
    jest.resetModuleRegistry();
  });

  afterEach(() => {
    restoreGlobals();
  });

  ['_localStorage', '_sessionStorage'].forEach(gKey => {
    it(`[${gKey}] should define a property on the global object with writable false`, () => {
			require('../src/setup');
      expect(global[gKey.replace('_', '')].constructor.name).toBe(
        'LocalStorage'
      );
    });

    it(`[${gKey}] should define a property on the global object with writable false`, () => {
      global[gKey] = true;
			require('../src/setup');
      let e;
      try {
        global[`_${gKey.replace('_', '')}`] = 'blah';
      } catch (_e) {
        e = _e;
      }
      expect(e).toBeDefined();
    });
  });
});
