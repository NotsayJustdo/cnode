const express = require('express');
const request = require('request');
const qstring = require('querystring');
const router = express.Router();

module.exports = router;

router.get('/job', (req, res) => {
	// console.log(req.query);
	// console.log(qstring.stringify(req.query));
	let url;
	if(!req.query.tab) {
		url = 'https://cnodejs.org/api/v1/topics?tab=job&page=1';
		console.log(111);
	} else {
		const query = req.query;
		url = `https://cnodejs.org/api/v1/topics?${qstring.stringify(query)}`;
		console.log(222);
	}
	request(url, function (error, response, body) {
	  if(error) {
	  	console.log(error);
	  	return;
	  }
	 // body中保存的获取到的数据
	    // console.log(JSON.parse(body).data);  
	 res.render('job/job', {datas: JSON.parse(body).data}); 
	})
})

// 主体的详情页
router.get('/job/:id', (req, res) => {
	console.log(req.params);
	request(`https://cnodejs.org/api/v1/topic/${req.params.id}?mdrender=false`, function (error, response, body) {
	  if(error) {
	  	console.log(error);
	  	return;
	  }
	 // body中保存的获取到的数据
	    // console.log(JSON.parse(body).data);  
	    const getDatas = JSON.parse(body);
	    console.log(getDatas.data);
	 res.render('detail/detail', {datas: getDatas});
	})
})
