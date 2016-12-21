const request = require('request');
const qstring = require('querystring');
// 得到详情页数据
exports.getDetail = (req, callback) => {
	request(`https://cnodejs.org/api/v1/topic/${req.params.id}?mdrend er=false`, function (error, response, body) {
	  if(error) {
	  	console.log(error);
	  	return;
	  }
	 // body中保存的获取到的数据
	    // console.log(JSON.parse(body).data); 
	    try {
	    	body = JSON.parse(body);
	    	callback(body);
	    } catch (e) {
	    	console.log(e);
	    	return;
	    }
	})
}