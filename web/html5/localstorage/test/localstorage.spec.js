
describe('hello', function() {
  const KB = 1024;
  const MB = KB * 1024;
  const magic = 486725;
  const LOCAL_STORAGE_KEY = 'try-web-html5-localstorage-test';

  describe('A', function() {
    beforeEach(function() {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    });

    it('hello returns world', function() {
      assert.equal(hello(), 'world');
    });

    it('sizeof.sizeof returns size', function() {
      var object = {'hoge': 'fuga'};
      assert.equal(sizeof.sizeof(object), 16);
      assert.equal(sizeof.sizeof(JSON.stringify(object)), 30);
    });

    it('emtpyHash returns empty hash', function() {
      var actual = emptyHash();
      assert.equal(typeof actual, 'object');
      assert.equal(actual.length, undefined);
      assert.equal(sizeof.sizeof(actual), 0);
    });

    it('emtpyArray returns empty array', function() {
      var actual = emptyArray();
      assert.equal(typeof actual, 'object');
      assert.equal(actual.length, 0);
      assert.equal(sizeof.sizeof(actual), 0);
    });

    it('test object size is ...', function() {
      var object = getHashByNumber(magic);
      var string = JSON.stringify(object);
      assert.equal(sizeof.sizeof(object), 9512300);
      assert.equal(sizeof.sizeof(string), 10485754);
    });

    it('test object is less than 10MB', function() {
      var object = getHashByNumber(magic);
      var string = JSON.stringify(object);
      assert.equal(sizeof.sizeof(string) < (10 * MB), true);
    });

    it('test object + alpha is larger than 10MB', function() {
      var object = getHashByNumber(magic + 100);
      var string = JSON.stringify(object);
      assert.equal(sizeof.sizeof(string) > (10 * MB), true);
    });

    it('stringified size', function() {
      var object = getHashByNumber(magic);
      var string = JSON.stringify(object);
      assert.equal(sizeof.sizeof(object), 9512300);
      assert.equal(sizeof.sizeof(string), 10485754);
    });

    it('Browser can use LocalStorage', function() {
      assert(typeof(Storage) !== 'undefined');
    });

    it('Its undefined', function() {
      var actual = localStorage.getItem(LOCAL_STORAGE_KEY);
      assert.equal(actual, undefined);
    });

    it('LocalStorage can save object less than 10MB', function() {
      var object = getHashByNumber(magic);
      var string = JSON.stringify(object);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(string));
      } catch (e) {
        assert.equal(e.toString().includes('QuotaExceededError', 0), true);
      }
    });

    it('Can get saved items from localStorage', function() {
      var object = getHashByNumber(magic);
      var string = JSON.stringify(object);

      var item = localStorage.getItem(LOCAL_STORAGE_KEY);
      var actual = JSON.parse(item);

      assert.equal(item, undefined);
    });
  });

  describe('B', function() {
    it('can set item', function() {
      var object = {'hoge': 'fuga'};
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(object));
    });

    it('can get item', function() {
      var actual = localStorage.getItem(LOCAL_STORAGE_KEY);
      assert.equal(actual, '{"hoge":"fuga"}');
    });

    it('Larger than 10MB will be ...?', function() {
      var object = getHashByNumber(magic);
      var string = JSON.stringify(object);

      try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(string));
      } catch (e) {
        assert.equal(e.toString().includes('QuotaExceededError', 0), true);
      }

      var actual = localStorage.getItem(LOCAL_STORAGE_KEY);
      assert.equal(actual, '{"hoge":"fuga"}');
    });
  });
});
