
// 渲染页面的内容
/*var content = $('.content');
var contentPlace = $('.contentPlace');
contentPlace.css({display: 'none'});
content.html(contentPlace.text());*/

// 渲染评论
/*var comment = $('.comment');
var commentContentPlace = $('.commentContentPlace');
commentContentPlace.css({display: 'none'});
comment.html(comment.prev().text());*/

define(function(require, exports, module) {
	var ngProgress = require('ngprogress');
	// ngprogress
	ngProgress.start();	
	ngProgress.done();
})