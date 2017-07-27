const readline = require('readline');

const Util = function() {};
Util.prototype.unique = function(list) {
  var results = {};

  ['domains', 'categories'].forEach(function(key) {
    results[key] = {};
    list[key].forEach(function(word) {
      results[key][word] = (results[key][word] === undefined) ? 1 : results[key][word] + 1;
    });
  });

  return results;
};

Util.prototype.parse = function(line, name) {
  const parsed = line.split(' ');
  if (parsed[14] !== undefined) {
    if (parsed[14].includes(name)) {
      return this.split(parsed[14], name);
    }
  }
  return [];
};

Util.prototype.split = function(string) {
  return string.split(':')[1].split(';');
}; 

// ---

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var results = {
  'domains': [],
  'categories': [],
};

// function parse(string) {
//   return string.split(':')[1].split(';');
// }

const util = new Util;

rl.on('line', function(line) {
  util.parse(line, 'ドメイン').forEach(function(word) {
    results['domains'].push(word);
  });
  util.parse(line, 'カテゴリ').forEach(function(word) {
    results['categories'].push(word);
  });
  // const parsed = line.split(' ');
  // if (parsed[14] !== undefined) {
  //   if (parsed[14].includes('ドメイン')) {
  //     parse(parsed[14], 'ドメイン').forEach(function(word) {
  //       results['domains'].push(word);
  //     });
  //   } else if (parsed[14].includes('カテゴリ')) {
  //     parse(parsed[14], 'カテゴリ').forEach(function(word) {
  //       results['categories'].push(word);
  //     });
  //   }
  // }
});

rl.on('close', function(line) {
  console.dir(util.unique(results));
});
