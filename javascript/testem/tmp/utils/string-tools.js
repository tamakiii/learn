define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initials = initials;
  function initials(fullName) {
    var initials = (fullName || '').split(' ').map(function (name) {
      return name[0];
    }).join('');

    return initials || 'N/A';
  }
});