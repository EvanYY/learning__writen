# Math 函数
## 分页计算
const pageNo = Math.ceil((index + 1) / pageSize)
pageNo 页码 pageSize 每页显示条数，index 元素序号
注： 计算机序数是从0开始，落后一

## 数组最值
const A = [1,2,3,4,5]
const max = Math.max(...A)
// 早期写法 Math.max.apply(null,A)  <==> Math.max(1,2,3,4,5,6)

## 生成20-30之间的随机整数
Math.round(20 + Math.random()*10)

## 判断一个数是否是素数
function is_prime (n) {
	if(n <= 1) return false;
	const N = Math.floor(Math.sqrt(n))
	let is_prime = true
	for(let i = 2; i <= N;i++) {
		if(n % i === 0) {
			is_prime = false
			break
		}
	}
	return  is_prime
}

N^2 <= n <= (N+1)^2

## 数组操作
判断是否为数组 arr.isArray()
映射 1对1 map()
聚合 多对1 reduce()
筛选 filter()
创建数组 Array.from()
数组合并 contact
剪切 slice()
删除替换，插入 splice()
所有元素符合某个条件 every() 可以break
循环 forEach() 不可以循环
排序 sort()
- 默认排序顺序是根据字符串UniCode码。因为排序是按照字符串UniCode码的顺序进行排序的，所以首先应该把数组元素都转化成字符串（如有必要），以便进行比较。
/**数组根据数组对象中的某个属性值进行排序的方法
 * 使用例子：newArray.sort(sortBy('number',false)) //表示根据number属性降序排列;若第二个参数不传递，默认表示升序排序
 * @param attr 排序的属性 如number属性
 * @param rev true表示升序排列，false降序排序
 *
*/
function sortBy (attr,rev) {
	if(rev === undefined){
		rev = 1
	}else {
		rev = rev ? 1 : -1
	}
	return function (a,b) {
		a = a[attr]
		b = b[attr]
		if(a < b) return rev * -1
		if(a > b) return rev * 1
		return 0
	}
}

## 括号匹配问题
- 给一个括号表达式，中间只有[]和(),判断这个表达式是两边括号是不是平衡的。
比如 [(())]是平衡的，比如[()(()]就是不平衡的
基于栈的解法
function match(n,c) {
	return (c === '[' && n === ']') || (c === '(' && n === ')')
}
function is_balance(str) {
	const [first, ...others] = str
	const stack = [first]
	while(others.length > 0) {
		const c = stack[stack.length -1]
		const n = others.shift()
		if(!match(n,c)) {
			stack.push(n)
		}else {
			stack.pop()
		}
	}
	return stack.length === 0
}

## Set 集合类
add(element) // 添加、去重
has(element) // 判断是否存在
delete(element) // 删除
values() // 返回terator

写一个方法，给定一个数组，判断数组中某一项，或者任意多项的和，是否被另一个整数整除
PS:
solve([3,5,8], 13) = true
solve([3,9], 13) = false

相当于判断子数组的余数和 solve([7,8,2],7) 等价于 solve([0,1,2],7)
思路：
function solve(arr,N) {
	const s = new Set()
	for(let i = 0; i <=)
}