var ejs = require('ejs')
var people = ['geddy', 'neil', 'alex']
var html = '<%= people.join(", "); %>';
var options = {
  // 'cache' => 'Compiled functions are cached, requires filename',
  // 'filename' => ' Used by cache to key caches, and for includes',
  // 'context' => ' Function execution context',
  // 'compileDebug' => ' When false no debug instrumentation is compiled',
  // 'client' => ' Returns standalone compiled function',
  // 'delimiter' => ' Character to use with angle brackets for open/close',
  // 'debug' => ' Output generated function body',
  // '_with' => ' Whether or not to use with() {} constructs. If false then the locals will be stored in the locals object.',
};

// Tags
// <% 'Scriptlet' tag, for control-flow, no output
// <%= Outputs the value into the template (HTML escaped)
// <%- Outputs the unescaped value into the template
// <%# Comment tag, no execution, no output
// <%% Outputs a literal '<%'
// %> Plain ending tag
// -%> Trim-mode ('newline slurp') tag, trims following newline

console.log(ejs.render(html, {people: people}, options))
