#! /usr/bin/env node
// 描述如何打包
let entry = './src/index.js'; // 入口文件
let output = './dist/main.js'; // 出口文件
let fs = require('fs');
let path = require('path');
let script = fs.readFileSync(entry,'utf8');
let modules = [];
// 处理依赖关系
script = script.replace(/require\(['"](.+?)['"]\)/g,function() {
	let name = path.join('./src',arguments[1]); // ./src/a.js
	let content = fs.readFileSync(name,'utf8');
	modules.push({
		name,
		content
	})
	return `require('${name}')`
})
let ejs = require('ejs');
// '<a><%=name%></a>'
let template = `
 (function (modules) { // webpackBootstrap
 	// The module cache
 	var installedModules = {};

 	// The require function
 	function __webpack_require__(moduleId) {

 		// Check if module is in cache
 		if (installedModules[moduleId]) {
 			return installedModules[moduleId].exports;
 		}
 		// Create a new module (and put it into the cache)
 		var module = installedModules[moduleId] = {
 			i: moduleId,
 			l: false,
 			exports: {}
 		};

 		// Execute the module function
 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

 		// Flag the module as loaded
 		module.l = true;

 		// Return the exports of the module
 		return module.exports;
 	}


 	// expose the modules object (__webpack_modules__)
 	__webpack_require__.m = modules;

 	// expose the module cache
 	__webpack_require__.c = installedModules;

 	// define getter function for harmony exports
 	__webpack_require__.d = function (exports, name, getter) {
 		if (!__webpack_require__.o(exports, name)) {
 			Object.defineProperty(exports, name, {
 				enumerable: true,
 				get: getter
 			});
 		}
 	};

 	// define __esModule on exports
 	__webpack_require__.r = function (exports) {
 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
 			Object.defineProperty(exports, Symbol.toStringTag, {
 				value: 'Module'
 			});
 		}
 		Object.defineProperty(exports, '__esModule', {
 			value: true
 		});
 	};

 	// create a fake namespace object
 	// mode & 1: value is a module id, require it
 	// mode & 2: merge all properties of value into the ns
 	// mode & 4: return value when already ns object
 	// mode & 8|1: behave like require
 	__webpack_require__.t = function (value, mode) {
 		if (mode & 1) value = __webpack_require__(value);
 		if (mode & 8) return value;
 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
 		var ns = Object.create(null);
 		__webpack_require__.r(ns);
 		Object.defineProperty(ns, 'default', {
 			enumerable: true,
 			value: value
 		});
 		if (mode & 2 && typeof value != 'string')
 			for (var key in value) __webpack_require__.d(ns, key, function (key) {
 				return value[key];
 			}.bind(null, key));
 		return ns;
 	};

 	// getDefaultExport function for compatibility with non-harmony modules
 	__webpack_require__.n = function (module) {
 		var getter = module && module.__esModule ?
 			function getDefault() {
 				return module['default'];
 			} :
 			function getModuleExports() {
 				return module;
 			};
 		__webpack_require__.d(getter, 'a', getter);
 		return getter;
 	};

 	// Object.prototype.hasOwnProperty.call
 	__webpack_require__.o = function (object, property) {
 		return Object.prototype.hasOwnProperty.call(object, property);
 	};

 	// __webpack_public_path__
 	__webpack_require__.p = "";


 	return __webpack_require__(__webpack_require__.s = "<%-entry%>");
 })
 ({

 	"<%-entry%>": (function (module, exports) {

 		eval("module.exports = '学习前端架构 '\n\n//# sourceURL=webpack:///<%-entry%>?");

 	}),

 	"./src/index.js": (function (module, exports, __webpack_require__) {

 		eval(\`<%-script%>\`);

 	})

 });
`
let result = ejs.render(template, {
	entry,
	script
});
// result 为替换后的结果，最终要写到output中
fs.writeFileSync(output,result);
console.log('编译成功')