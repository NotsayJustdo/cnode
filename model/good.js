const request = require('request');
const qstring = require('querystring');


exports.getAll = (req, callback) => {
	let url;
	let datas;
	let flag = false;
	if(!req.query.tab) {
		url = 'https://cnodejs.org/api/v1/topics?tab=good&page=1';
		console.log(111);
	} else {
		const query = req.query;
		url = `https://cnodejs.org/api/v1/topics?${qstring.stringify(query)}`;
		console.log(222);
	}
	request(url, (error, response, body) => {
		  if(error) {
		  	console.log(error);
		  	return;
		  }
		 // body中保存的获取到的数据 
		 try {
		  	body = JSON.parse(body);
		  	callback(body)
		  } catch (e) {
		  	console.log(e);
		  	return;
		  }
	})	
}
