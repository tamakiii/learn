const cheerio = require('cheerio');
const removeEmptyLines = require("remove-blank-lines");
const getStdin = require('get-stdin');
const trim = require('trim-whitespace');

getStdin().then(function(html) {
  const $ = cheerio.load(html);

	var texts = removeEmptyLines($('body').text());
	console.log(trim(texts));
});
