// In Mocha v3.0.0 and newer, returning a Promise and calling done() will result in an exception, as this is generally a mistake:

/*
const assert = require('assert');

it('should complete this test', function (done) {
  return new Promise(function (resolve) {
    assert.ok(true);
    resolve();
  })
  .then(done);
});
*/

// The above test will fail with Error: Resolution method is overspecified. Specify a callback *or* return a Promise; not both.. In versions older than v3.0.0, the call to done() is effectively ignored.
