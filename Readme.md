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

## 2 自动化构建
 构建就是做这件事情，把源代码转换成发布到线上的可执行 JavaScript 、 css 、html 代码， 包括如下内容。

 -代码转换：es6 编译成es5，less编译成css等。
 -文件优化：压缩 JavaScript 、css 、 html 代码 ，压缩合并图片等
 -代码分割： 提取多个页面的公共代码、提取首屏不需要执行部分的代码让其异步加载
 -模块合并：在采用模块画的项目里会有很多个模块和文件，需要构建功能把模块分类合并成一个文件。
 -自动刷新：监听本地源代码的变化，自动重新构建。刷新浏览器
 -代码校验：在代码被提交到仓库前需要代码是否符合规范，以及单元测试是否通过。
 -自动发布：更新完成代码后，自动构建出线上发布代码并传输给发布系统

## 3. Webpack
Webpack 是一个打包模块化 JavaScript 的工具，在Webpack里一切文件皆模块化，通过 loader （style-loader）转换文件，通过 Plugin 注入钩子，最后输出由多个模块组合成的文件。Webpack 专注于构建模块化项目。

一切文件：JavaScript 、css、 scss、 图片、 模板，在webpack严重都是一个模块，这样的好处是能清晰的描述出各个模块之间的依赖关系，以方便webpack 对模块进行 组合和打包。经过webpack的处理，最终会输出浏览器能使用的静态资源。

## 3.1 安装 webpack

// 本地安装q
```
npm init -y
npm install webpack webpack-cli -D
```