describe('setup', () => {
  const orignalImpGlobsl = {};

  const setupGlobals = (restore = false) => {
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

  const restoreGlobals = () => setupGlobals(true);

  beforeEach(() => {
    setupGlobals();
    jest.resetModuleRegistry();
  });

  afterEach(() => {
    restoreGlobals();
  });

  ['_localStorage', '_sessionStorage'].forEach(globalKey => {
    it(`[${globalKey}] should define a property on the global object with writable false`, () => {
      require('../src/setup');
      expect(global[globalKey.replace('_', '')].constructor.name).toBe(
        'LocalStorage'
      );
    });

    it(`[${globalKey}] should define a property on the global object with writable false`, () => {
      global[globalKey] = true;
      require('../src/setup');
      let e;
      try {
        global[`_${globalKey.replace('_', '')}`] = 'blah';
      } catch (_e) {
        e = _e;
      }
      expect(e).toBeDefined();
    });
  });
});
