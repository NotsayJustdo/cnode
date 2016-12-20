const express = require('express');
const request = require('request');

// 引入自定义路由
const all = require('./controller/all');
const good = require('./controller/good');
const share = require('./controller/share');
const ask = require('./controller/ask');
const job = require('./controller/job');


const app = express();

app.use('/', express.static('public'));
app.use('/', express.static('uploads'));

app.set('views', __dirname+'/views');
app.set('view engine', 'xtpl')

// 使用路由
app.use('/cnode', all);
app.use('/cnode', good);
app.use('/cnode', share);
app.use('/cnode', ask);
app.use('/cnode', job);


app.listen(3000, '127.0.0.1', () => {
	console.log('running at port 3000');
})
