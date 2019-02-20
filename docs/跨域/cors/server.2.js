let express = require('express');
let app = express();
app.disable('x-powered-by');
let whiteList = ['http://localhost:3000'];
app.use(function(req,res,next) {
	let origin = req.headers.origin;
	if(whiteList.includes(origin)) {
		res.setHeader('Access-Control-Allow-Origin', origin); // 允许哪个源可以访问
		res.setHeader('Access-Control-Allow-Headers', 'name'); // 允许哪个头可以访问我
		res.setHeader('Access-Control-Allow-Methods', 'PUT'); // 允许哪个头可以访问我
		res.setHeader('Access-Control-Allow-Credentials', true); // 是否可以携带cookie cookie不允许跨域
		res.setHeader('Access-Control-Allow-Max-Age',3); // OPTIONS 试探请求 看是否可以跨域 预检的存活时间
		res.setHeader('Access-Control-Expose-Headers', 'name'); // 允许返回的头
		if(req.method === 'OPTIONS') {
			res.end()
		}
	};
	next();
})
app.get('/getData',(req,res,next)=> {
	console.log(req.headers);
	res.setHeader('name','yy~~');
	res.end('4000 数据访问成功 cors 跨域 3000到4000')
})
app.put('/getData', (req, res, next) => {
	console.log(req.headers);
	// res.setHeader('name','yy~~');
	res.end('out 成功')
})
app.use(express.static(__dirname));
app.listen(4000);
console.log('cros success 4000')