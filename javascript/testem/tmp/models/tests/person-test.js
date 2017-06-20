define(['../person', 'assert'], function (_person, assert) {
  'use strict';

  var _person2 = _interopRequireDefault(_person);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  // node module

  describe('Person properties', function () {
    var fullName = 'Phineas Fletcher';
    var person = void 0;

    beforeEach(function () {
      person = new _person2.default(fullName);
    });

    it('name is assigned properly', function () {
      assert.equal(person.name, fullName, 'person\'s name is correct.');
    });

    it('initials are assigned properly', function () {
      var expectedInitials = 'PF';
      assert.equal(person.initials, expectedInitials, 'person\'s initials are correct.');
    });
  });
});