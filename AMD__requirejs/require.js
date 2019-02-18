// define 声明模块 通过require 使用一个模块
let factories = {}
// 模块名字 依赖  工厂函数
function define(moduleName, dependencies,factory) {
	factory.dependencies = dependencies; // 将依赖记录在factory
	factories[moduleName] = factory
}
function require (mods, callback) {
	let result = mods.map(function(mod) {
		let factory =	factories[mod];
		let exports;
		let dependencies = factory.dependencies; // ['name']
		// require()
		require(dependencies,function() {
			exports =  factory.apply(null, arguments);
		})
		return exports;
	});
	callback.apply(null, result);
}
define('name', [],function() {
	return '杨洋'
});

define('age',['name'],function(name) {
	return name + 27
});
require(['age'],function(age) {
	console.log(age);
})