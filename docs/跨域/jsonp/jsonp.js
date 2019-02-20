function jsonp({url,params,cb}) {
	return new Promise((resolve,reject)=> {
		let script = document.createElement('script');
		window[cb] = function (data) {
			// if (reject) {
			// 	throw new Error(reject);
			// }
			resolve(data);
			document.body.removeChild(script);
		}
		params = {...params,cb};
		let arrs = [];
		for(let key in params) {
			arrs.push(`${key}=${params[key]}`)
		};
		script.src = `${url}?${arrs.join('&')}`;
		document.body.appendChild(script);
	})
}
// 只能发送get
// 不安全 xss攻击
// https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=b&cb=show
// https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=b&sugmode=2&json=1&p=3&sid=1468_25809_21109_28413&req=2&bs=b&pbs=b&csor=1&pwd=b&cb=jQuery110203617204673191745_1550566568277&_=1550566568283
// jsonp({
// 	url: 'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
// 	params: {
// 		wd: 'b'
// 	},
// 	cb: 'show'
// }).then(data=> {
// 	console.log(data)
// });
jsonp({
	url: 'http://localhost:3000/say',
	params: {
		wd: '我爱你'
	},
	cb: 'show'
}).then(data => {
	console.log(data)
})