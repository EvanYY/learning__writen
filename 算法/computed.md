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