// 定义：  重载就是一组具有相同名字、不同参数列表的函数（方法）。
// 方案一：
function overLoading() {
	// 根据arguments.length，对不同的值进行不同的操作
	switch (arguments.length) {
		case 0:
			/*操作1的代码写在这里*/
			break;
		case 1:
			/*操作2的代码写在这里*/
			break;
		case 2:
			/*操作3的代码写在这里*/

			//后面还有很多的case......
	}

}

// 方案二
var people = {
	values: ["Dean Edwards", "Sam Stephenson", "Alex Russell", "Dean Tom"]
};

function addMethod(object, name, fn) {
	var old = object[name];
	object[name] = function () {
		if (fn.length === arguments.length) {
			return fn.apply(this, arguments);
		} else if (typeof old === 'function') {
			return old.apply(this, arguments);
		}
	}
}
// 需求  我们希望people对象拥有一个find方法，当不传任何参数时，就会把people.values里面的所有元素返回来；当传一个参数时,就把first-name跟这个参数匹配的元素返回来；当传两个参数时，则把first-name和last-name都匹配的才返回来。
// 因为find方法是根据参数的个数不同而执行不同的操作的，所以，我们希望有一个addMethod方法，能够如下的为people添加   find的重载：
// addMethod(people, "find", function () {}); /*不传参*/
// addMethod(people, "find", function (a) {}); /*传一个*/
// addMethod(people, "find", function (a, b) {}); /*传两个*/
addMethod(people, 'find', function () {
	return this.values
})
addMethod(people, 'find', function(firstName) {
	let ret = [];
	for(let i = 0; i <this.values.length;i++) {
		if(this.values[i].indexOf(firstName) === 0) {
			ret.push(this.values[i])
		}
	};
	return ret
})
addMethod(people,'find', function(firstName,lastName) {
	let ret =[];
	 for(var i=0;i<this.values.length;i++) {
		 if(this.values[i] === `${firstName} ${lastName}`) {
			 ret.push(this.values[i])
		 }
	 }
});
// console.log(people.find()); //["Dean Edwards", "Alex Russell", "Dean Tom"]
// console.log(people.find("Dean")); //["Dean Edwards", "Dean Tom"]
// console.log(people.find("Dean Edwards")); //["Dean Edwards"]