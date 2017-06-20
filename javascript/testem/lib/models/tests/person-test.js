mport Person from '../lib/person';

var assert = require('assert'); // node module

describe('Person properties', function() {  
  let fullName = 'Phineas Fletcher';
  let person;

  beforeEach(function() {
    person = new Person(fullName);       
  });

  it('name is assigned properly', function() {
    assert.equal(person.name, fullName, `person's name is correct.`);
  });

  it('initials are assigned properly', function() {
    let expectedInitials = 'PF';
    assert.equal(person.initials, expectedInitials, `person's initials are correct.`);
  });

});
