// 发布订阅模式 先订阅 后发布[fn1,fn2,fn3]
// 绑定的方法 都有一个update属性
function Dep() {
	this.subs =[]
}
Dep.prototype.addSub = function(sub) {
	// 订阅
	this.subs.push(sub);
};
Dep.prototype.notify=function() {
	this.subs.forEach(sub=> sub.update())
};
function Watcher(fn) {
	// Watcher 是一个类 通过这个类创建的实例都拥有update方法
	this.fn = fn;
};
Watcher.prototype.update = function ( ){
	this.fn()
};
let watcher = new Watcher(function() {
// 监听函数
	console.log(1)
});
let dep = new Dep();
dep.addSub(watcher); // 将watcher 放到数组中 [wathcer.update]
dep.addSub(watcher); // 将watcher 放到数组中 [wathcer.update]
console.log(dep.subs);
dep.notify()