'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

var Customer = mongoose.model('customer', customerSchema);
module.exports = Customer;
