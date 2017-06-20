define(['exports', '../utils/string-tools'], function (exports, _stringTools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  function Person(name) {
    this.name = name;
    this.initials = (0, _stringTools.initials)(name);
  };

  exports.default = Person;
});