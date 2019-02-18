let fs = require('fs');
function req (moduleName) {
	// content 代表的是文件内容
	let content = fs.readFileSync(moduleName,'utf8');
	// 最后一个参数是函数的内容体
	let fn = new Function('exports','module','require','__dirname','__filename', content + '\n return module.exports');
	let module = {
		exports:{}
	}
	console.log(fn)
	return fn(module.exports,module,req,__dirname,__filename);
}
let str = req('./a.js');
console.dir(str);
/**
 * function(exports,module,require,__dirname,__filename,) {
 * 	module.exports = 'Hello world';
 * return module.exports
 * }
 */

