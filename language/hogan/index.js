// require hogan
var hogan = require("hogan.js");

console.log(hogan.compile, hogan.template);
// hogan.template = 'templates/layout.mustache';

// // compile template
// var template = hogan.compile("@{{name}}");
//
// var team = ['dhg', 'fat', 'jimio', 'nickgreen', 'sayrer'];
//
// team.map(function (twitterer) {
//
//   // Render context to template
//   return template.render({name: twitterer });
//
// });
//
// // outputs "Follow: @dhg @fat @jimio @nickgreen @sayrer!"
// console.log('Follow: ' + team.join(' ') + '!');
