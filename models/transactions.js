'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid: String,
  day: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: Array
});

var Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;
