const striptags = require('striptags');
const minimist = require('minimist');
const fs = require('fs');
const outpipe = require('outpipe');
const getStdin = require('get-stdin');
const cheerio = require('cheerio');
const removeEmptyLines = require("remove-blank-lines");
const trim = require('trim-whitespace');

getStdin().then(function(html) {
  const $ = cheerio.load(html);

	var texts = removeEmptyLines($('body').text());
	console.log(trim(texts));
	// console.log(removeEmptyLines($('body').text()).replace(/^\s+/gm/, ''));
	// console.log(removeEmptyLines($('body').text()).replace(/^\s*/gm, ''));
	// console.log(removeEmptyLines($('body').text()));
  // console.log($('body').text().replace('/^\s/g', ''));
  // console.log($('body').text().replace(/^\s+\n$/g, ''));
});

// getStdin().then(function(str) {
//   // console.log(striptags(str));
// 	client.fetch('http://www.google.com/search', { q: 'node.js' }, function (err, $, res) {
// 			// レスポンスヘッダを参照
// 			console.log(res.headers);
// 
// 			// HTMLタイトルを表示
// 			console.log($('title').text());
// 
// 			// リンク一覧を表示
// 			$('a').each(function (idx) {
// 				console.log($(this).attr('href'));
// 			});
// 			});
// });

// var readline = require('readline');
// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });
// 
// rl.on('line', function(line){
//   console.log(line);
//   console.log('---');
// });

// process.stdin.resume();
// process.stdin.setEncoding('utf8');
// 
// var data = '';
// 
// process.stdin.on('data', function(chunk) {
//   data += chunk;
// });
// 
// process.stdin.on('end', function() {
//   callback(data)
// });
// 
// function callback(data) {
//   console.log(data);
// }


// console.log(data);

// var argv = minimist(process.argv.slice(2));
// 
// function read() {
//   var r = fs.createReadStream(file);
//   r.pipe(outpipe(argv.output));
// }
// 
// read();

// console.log(argv);
// console.log(fs.);

// var result = striptags(argv._[0]);
// console.log(result);
