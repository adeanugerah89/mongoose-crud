'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var transactionSchema = new Schema({
  memberid: [{
    type: Schema.Types.ObjectId,
    ref: 'customer'
  }],
  day: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'books'
  }]
});

var Transaction = mongoose.model('transaction', transactionSchema);

module.exports = Transaction;
