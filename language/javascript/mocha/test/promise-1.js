var assert = require('assert');
var Db = require('../src/db.js')
var User = require('../src/user.js')

var db = new Db;
var tobi = new User('tobi');
var loki = new User('loki');
var jane = new User('jane');

beforeEach(function() {
  return db.clear()
    .then(function() {
      return db.save([tobi, loki, jane]);
    });
});

describe('#find()', function() {
  it('respond with matching records', function() {
    assert.equal(db.find({ type: 'User' }).length, 3);
  });
});
