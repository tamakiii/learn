var Db = function() {
  this.entities = [];
};

Db.prototype.find = function(conditions) {
  return this.entities;
};

Db.prototype.clear = function() {
  return new Promise(function (resolve, reject) {
    resolve();
  });
};

Db.prototype.save = function (entities) {
  this.entities = entities;
};

module.exports = Db;
