var User = function(name) {
  this.name = name;
};

User.prototype.save = function(callback) {
  callback();
};

module.exports = User;
