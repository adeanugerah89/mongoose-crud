'use strict'
//All Dependencies
var mongoose = require('mongoose');       
mongoose.connect('mongodb://localhost/library');
var db = mongoose.connection;

const express = require('express'),
      path = require('path'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),

      //All Route Files
      routes = require('./routes/index'),
      users = require('./routes/users'),
      books = require('./routes/books'),
      customer = require('./routes/customer'),
      transaction = require('./routes/transactions'),

      //Express Instance
      app = express();
      


//load environment variables with dotenv
require('dotenv').config()


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});


app.use('/', routes);
app.use('/users', users);
app.use('/books', books);
app.use('/customer', customer);
app.use('/transaction', transaction);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    message: err.message,
    error: {}
  });
});


module.exports = app;
