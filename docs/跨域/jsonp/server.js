let express = require('express');
let app = express();
// console.log('express')
// console.log(express)
app.get('/say',function(req,res) {
	let {wd,cb} =req.query;
	console.log(wd);
	res.end(`${cb}('我不爱你')`)
})
app.listen(3000);
console.log('succsess')