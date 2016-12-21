const express = require('express');
var moment = require('moment');
const allModel = require('../model/job');
const detailModel = require('../model/detail');
const router = express.Router();

module.exports = router;

router.get('/job', (req, res) => {
	// console.log(req.query);
	allModel.getAll(req, body => {
		body.data.forEach((v, i) => {
			moment.locale('zh-cn');
			v['convertTime'] = moment(v.last_reply_at).fromNow();
		})
		res.render('job/job', {datas: body.data});
	});
})

// 主体的详情页
router.get('/job/:id', (req, res) => {
	console.log(req.params);
	detailModel.getDetail(req, body => {
		body.data.replies.forEach((v, i) => {
			moment.locale('zh-cn');
			v['convertTime'] = moment(v.create_at).fromNow();
		})
		res.render('detail/detail', {datas: body});
	})
})