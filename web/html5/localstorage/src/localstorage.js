
function hello() {
  return 'world';
}

function emptyHash() {
  return {};
}

function emptyArray() {
  return [];
}

function getHashByNumber(number) {
  var object = {};

  for (var i = 0; i <= number; ++i) {
    object[i] = 1;
  }

  return object;
}

