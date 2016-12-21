const express = require('express');
var moment = require('moment');
const allModel = require('../model/good');
const detailModel = require('../model/detail');
const router = express.Router();

module.exports = router;

router.get('/good', (req, res) => {
	// console.log(req.query);
	allModel.getAll(req, body => {
		body.data.forEach((v, i) => {
			moment.locale('zh-cn');
			v['convertTime'] = moment(v.last_reply_at).fromNow();
		})
		res.render('good/good', {datas: body.data});
	});
})

// 主体的详情页
router.get('/good/:id', (req, res) => {
	console.log(req.params);
	detailModel.getDetail(req, body => {
		body.data.replies.forEach((v, i) => {
			moment.locale('zh-cn');
			v['convertTime'] = moment(v.create_at).fromNow();
		})
		res.render('detail/detail', {datas: body});
	})
})
