// // 发布订阅模式 订阅 在有发布[fn1,fn2,fn3]\
// // 绑定的方法 都有一个update属性
// function Dep() {
// 	this.subs =[]
// }
// Dep.prototype.addSub = function(sub) {
// 	// 订阅
// 	this.subs.push(sub);
// };
// Dep.prototype.notify


function Vue(options = {}) {
	this.$options = options; // 将所有属性挂在在 $options
	var data = this._data = this.$options.data; // {a:1}
	observe(data);
	// this 实例代理 this._data
	for (let key in data) {
		Object.defineProperty(this, key, {
			enumerable: true,
			get() {
				return this._data[key]; // this.a = {a:1}
			},
			set(newValue) {
				this._data[key] = newValue;
			}
		});
	}
	new Compile(options.el, this);
}
// 将$options 属性值绑定在 dom {{}} 模板中
function Compile(el, vm) {
	// el 表示替换的范围
	vm.$el = document.querySelector(el);
	// 挂在在文档碎片中
	let fragment = document.createDocumentFragment();
	while (child = vm.$el.firstChild) { // 将 app中的内容 移入到内存中
		fragment.appendChild(child);
	}
	replace(fragment);

	function replace(fragment) {
		Array.from(fragment.childNodes).forEach(function (node) {
			// 循环每一层
			let text = node.textContent;
			let reg = /\{\{(.*)\}\}/;
			if (node.nodeType === 3 && reg.test(text)) {
				console.log(RegExp.$1); // a.a  b
				let arr = RegExp.$1.split('.'); // [a,a] [b]
				let val = vm;
				arr.forEach(function (k) {
					// 取this.a.a this.b
					val = val[k];
				});
				node.textContent = text.replace(/\{\{(.*)\}\}/, val)
			}
			if (node.childNodes) {
				replace(node)
			}
		})
	}
	vm.$el.appendChild(fragment);
	/**DocumentFragments 是DOM节点。它们不是主DOM树的一部分。通常的用例是创建文档片段，将元素附加到文档片段，然后将文档片段附加到DOM树。在DOM树中，文档片段被其所有的子元素所代替。因为文档片段存在于内存中，并不在DOM树中，所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。
	 * 当浏览器必须重新处理和绘制部分或全部页面时， 回流就会发生， 例如当一个交互式站点更新后。
	 *
	 */

}
// vm.$options
// 观察对象给对象增加 Object.defineProperty
function Observe(data) {
	for (let key in data) { // 把data属性通过 Object.defineProperty方式 定义属性
		let val = data[key];
		observe(val);
		Object.defineProperty(data, key, {
			enumerable: true,
			get() {
				return val;
			},
			set(newValue) {
				if (newValue === val) return;
				val = newValue; // 如果以后获取值的时候将刚才设置的值再丢回去
				observe(newValue)
			}
		})
	}
}

function observe(data) {
	if (typeof data !== 'object') return; // 解决无限循环
	return new Observe(data)
}
// vue 特点不能新增不存在的属性 不能存在的属性没有get和set 如若没有就不能深度监测属性的变化
// 深度响应 因为每次赋予一个新对象时会给这个新对象增加数据劫持
// 数据劫持 通过Object.defineProperty()来劫持对象属性的setter和getter操作，在数据变动时做你想要做的事情
// node 同构 http://www.cnblogs.com/woodk/p/8353573.html