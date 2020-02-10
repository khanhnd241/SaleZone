var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./api/routes/index');
var usersRouter = require('./api/routes/admin/usersRoute');
var customerRouter = require('./api/routes/customer');
var app = express();
//connect to db
var mongoose = require('mongoose');
let option = {
  db: {native_parse: true},
  server: {poolSize: 5},
  user: 'admin',
  pass: 'admin'
}
mongoose.Promise =global.Promise;
mongoose.connect('mongodb://localhost:27017/DBSaleZone',option).then(
  () => {
    console.log('Connect to DB successfully');
  },
  err => {
    console.log(`Connection failed, error: ${err}`);
  }
)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/customer', customerRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
