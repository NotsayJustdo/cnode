const request = require('request');
// 得到详情页数据
exports.getDetailById = (v, callback) => {
	request(`https://cnodejs.org/api/v1/topic/${v.id}`, (error, response, body) => {
	  if(error) {
	  	console.log(error);
	  	return;
	  }
	 // body中保存的获取到的数据
	    // console.log(JSON.parse(body).data); 
	    try {
	    	// body = JSON.parse(body);
	    	callback(v, body);
	    } catch (e) {
	    	console.log(e);
	    	return;
	    }
	})
}