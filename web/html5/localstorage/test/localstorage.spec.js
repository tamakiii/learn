
describe('hello', function() {
  const KB = 1024;
  const MB = KB * 1024;
  const magic = 534522;

  it('hello returns world', function() {
    assert.equal(hello(), 'world');
  });

  it('sizeof.sizeo is can be used', function() {
    var object = {'hoge': 'fuga'};
    assert.equal(sizeof.sizeof(object), 16);
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
    assert.equal(sizeof.sizeof(object), 10468240);
  });

  it('test object is less than 10MB', function() {
    var object = getHashByNumber(magic);
    assert.equal(sizeof.sizeof(object) < (10 * MB), true);
  });

  it('stringified size', function() {
    var object = getHashByNumber(magic);
    var string = JSON.stringify(object);
    assert.equal(sizeof.sizeof(object), 10468240);
    assert.equal(sizeof.sizeof(string), 16660298);
  });

  it('localStorage can save object less than 10MB', function() {
    // TODO:
  });
});
