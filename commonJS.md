## 1.模块化
模块化是指把一个复杂的系统分解到多个模块以方便编码

### 1.1 命名空间
 开发网页通过命名空间的方式来组织代码
 - 命名空间冲突，两个库可能会使用同一个名称
 - 无法合理地管理项目的依赖和版本
 - 无法方便地控制依赖的加载顺序

### 1.2 CommonJS
CommonJS 是一种使用广泛的 JavaScript 模块化规范，核心思想是通过 require 方法来同步地加载依赖的其他模块，通过 module.exports 导出需要暴露的接口。(执行于node环境)

#### 1.2.1 用法
  采用CommonJS 导入及导出的代码 demo__Require_CommonJS_Node 文件夹下

### 1.3 AMD
	AMD 也是一种 JavaScript 模块化规范，与CommonJS 最大的不同在于他采用异步的方法去加载依赖模块。AMD 规范主要是为了解决针对浏览器环境的模块化问题，最具代表性的实现是requirejs

AMD 优点
-可在不转换代码的情况下直接在浏览器中执行
-可加载多个依赖
-可在浏览器和node环境下执行
#### 1.3.1 AMD 代码分析在 requirejs.js下

### 1.4 ES6 模块化
ES6 模块化 是 ECMA 提出的 JavaScript 模块化规范，他在语言的层面上实现了模块化。浏览器厂商和 Node.js 都宣布要原生支持该规范。它将逐渐取代 CommonJS 和AMD 规范，成为浏览器和服务器通用的模块解决方案。
采用ES6 模块化导入及导出时的代码如下
// 导入
import {name} from './~~~~~';
// 导出
export const name = 'yy zuishuai'

ES6虽然是最终模块化方案，但他的缺点在于目前无法直接运行在大部分 JavaScript 运行环境下，必须通过工具转换成标准的 es5 后才能正常运行