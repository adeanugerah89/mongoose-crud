'use strict'

var Customers = require('../models/customer');

var createCustomer = (req,res)=>{
  Customers.create({
    name: req.body.name,
    memberid: req.body.memberid,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  },(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var getAllCustomer = (req,res)=>{
  Customers.find({},(err,result)=>{
    if (err) {
      res.send(err)
    }
    console.log(result);
    res.send(result)
  })
}

var updateCustomer = (req,res)=>{
  Customers.findById(req.params.id,(err,data)=>{
    if (err) {
      res.send(err.message)
    }
    data.name = req.body.name || data.name;
    data.memberid = req.body.memberid || data.memberid;
    data.address = req.body.address || data.address;
    data.zipcode = req.body.zipcode || data.zipcode;
    data.phone = req.body.phone || data.phone;
    
    data.save((err,data)=>{
      if (err) {
        res.send(err.message)
      }
      res.send(data)
      console.log(data);
    })
  })
}

var deleteCustomer = (req,res)=>{
  Customers.findByIdAndRemove(req.params.id,(err)=>{
    if (err) {
      res.send(err)
    }
    res.send('data already delete')
  })
}

var findOneCustomer = (req,res)=>{
  Customers.findById(req.params.id,(err,data)=>{
    if (err) {
      res.send(err)
    }
    res.send(data)
  })
}

module.exports = {
  createCustomer,
  getAllCustomer,
  updateCustomer,
  deleteCustomer,
  findOneCustomer
}