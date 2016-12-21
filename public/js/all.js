define(function(require, exports, module) {
	var $ = require('jquery');
	require('bootstrap');
	var ngProgress = require('ngprogress');

	// 根据地址栏的url的变化，使导航栏的相对应的话题分类发生改变
	var lis = $('.nav-bgc li');
	var pathname = location.pathname;
	lis.each(function(i, v) {
		var href = $(v).children().eq(0).attr('href');
		if(href === pathname) {
			$(v).addClass('active');
		}
	})


	// 话题上鼠标移入移除改变背景颜色
	var topic = $('.topic');
	topic.on('mouseenter', function() {
		this.style.backgroundColor = '#eee';
	}).on('mouseleave', function() {
		this.style.backgroundColor = '#fff';
	});

	// ngprogress
	ngProgress.start();	
	ngProgress.done();
	
})
