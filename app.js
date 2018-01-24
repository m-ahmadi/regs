let express = require('express');
let path = require('path');
let favicon = require('serve-favicon');
let logger = require('morgan');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let xhbs = require('express-handlebars');

let app = express();

// view engine setup
let xhb = xhbs.create({
	extname: '.hbs',
	defaultLayout: 'main',
	layoutsDir: './views/layouts',
	partialsDir: './views/partials'
});
app.engine('.hbs', xhb.engine);
app.set('view engine', '.hbs');


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use( express.static( path.join(__dirname, 'public') ) );

// routes
app.use('/', require('./routes/index'));
app.use('/service-centers', require('./routes/service-centers'));
app.use('/search-result', require('./routes/search-result'));
app.use('/add_car', require('./routes/add-car'));

// catch 404 and forward to error handler
app.use( (req, res, next) => {
	let err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use( (err, req, res, next) => {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

module.exports = app;