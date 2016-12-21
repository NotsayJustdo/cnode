const express = require('express');
const moment = require('moment');
const allModel = require('../model/all');
const detailModel = require('../model/detail');
const idMode = require('../model/getDetailById');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
	// console.log(req.query);
	allModel.getAll(req, body => {
		let topicDatas = body;
		topicDatas.data.forEach((v, i) => {
			moment.locale('zh-cn');
			v['convertTime'] = moment(v.last_reply_at).fromNow();
		})
		res.render('all/all', {datas: topicDatas.data});		
	});
})

// 主体的详情页
router.get('/all/:id', (req, res) => {
	console.log(req.params);
	detailModel.getDetail(req, body => {
		body.data.replies.forEach((v, i) => {
			moment.locale('zh-cn');
			v['convertTime'] = moment(v.create_at).fromNow();
		})
		res.render('detail/detail', {datas: body});
	})
})
