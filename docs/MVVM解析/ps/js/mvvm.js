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
}
// vm.$options
// 观察对象给对象增加 Object.defineProperty
function Observe(data) {
	for (let key in data) { // 把data属性通过 Object.defineProperty方式 定义属性
		let val = data[key];
		observe(val);
		debugger
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
	return new Observe(data)
}
// vue 特点不能新增不存在的属性 不能存在的属性没有get和set 如若没有就不能深度监测属性的变化
// 深度响应 因为每次赋予一个新对象时会给这个新对象增加数据劫持
// node 同构 http://www.cnblogs.com/woodk/p/8353573.html