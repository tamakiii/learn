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

Util.prototype.transform = function(unique) {
  var results = [];

  for (let k in unique) {
    results.push({'name': k, 'count': unique[k]});
  }

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

Util.prototype.trim = function(string, mask) {
  while (~mask.indexOf(string[0])) {
    string = string.slice(1);
  }
  while (~mask.indexOf(string[string.length - 1])) {
    string = string.slice(0, -1);
  }
  return string;
};

Util.prototype.split = function(string) {
  return string.split(':')[1].split(';');
}; 

Util.prototype.sort = function(hash) {
  return hash.sort(function(a, b) {
    return b.count - a.count;
  });
}

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

const util = new Util;

rl.on('line', function(line) {
  util.parse(line, 'ドメイン').forEach(function(word) {
    results['domains'].push(util.trim(word, '"'));
  });
  util.parse(line, 'カテゴリ').forEach(function(word) {
    results['categories'].push(util.trim(word, '"'));
  });
});

rl.on('close', function(line) {
  const unique = util.unique(results);
  const sorted = {
    'domains': util.sort(util.transform(unique.domains)),
    'categories': util.sort(util.transform(unique.categories)),
  };

  const merged = Object.assign(
    util.sort(util.transform(unique.domains)),
    util.sort(util.transform(unique.categories))
  );

  const selected = merged.slice(0, 10).map(function(row) {
    return row.name;
  });

  console.log(selected.join(','));
});
