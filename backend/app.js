/**
* @author Manoj Kumar<manojswami600@gmail.com>
* Date: 18-08-2021
*/

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const http = require('http');

var app = express();

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

process.setMaxListeners(0);

app.use(bodyParser.json({
	limit: '8mb'
})); // support json encoded bodies

app.use(bodyParser.urlencoded({
	limit: '8mb',
	extended: true
})); // support encoded bodies

app.use(cookieParser());

app.use(config.baseUrl, express.static(path.join(__dirname, 'public')));

// logging POST Requests and parameters, sanitizing request payload
app.use(async function(req, res, next) {
	console.log('\x1b[33m%s\x1b[0m', '-------------------------------------------------------------------------');
	var ip = req.headers["x-real-ip"] || req.socket.remoteAddress || null;
	console.log('\x1b[36m%s\x1b[0m', 'Request:', req.originalUrl, "IP: ["+ip+"] ", "["+new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })+"]");
	console.log('\x1b[35m%s\x1b[0m', 'Method:', req.method);
	console.log(req.body);
	console.log('\x1b[33m%s\x1b[0m', '--------------------------------------------------------------------------');

	res.header("X-powered-by", "Blood, sweat, and tears.");
	res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With,content-type");
	res.header('Access-Control-Allow-Credentials', true);

	next();
});

const indexRoutes = require('./routes/index');

/**
* Set all routes here
*/

app.use(config.baseUrl + 'api', indexRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	console.log(err);
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	// render the error page
	res.status(err.status || 500);
	res.render('error');
});
module.exports = app;