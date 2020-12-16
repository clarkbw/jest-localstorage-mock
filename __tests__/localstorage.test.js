import { LocalStorage } from '../src/localstorage';

describe('localstorage', () => {
  let localStorage;

  beforeEach(() => {
    localStorage = new LocalStorage(jest);
  });

  describe('getItem', () => {
    it('should return null if the item is undefined', () => {
      expect(localStorage.getItem('item')).toBeNull();
    });

    it("should return '' instead of null", () => {
      localStorage.setItem('item', '');
      expect(localStorage.getItem('item')).toBe('');
    });
  });
});
