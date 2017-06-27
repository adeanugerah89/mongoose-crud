'use strict'

var Transaction = require('../models/transactions');

let createTransaction = (req,res)=>{
  let due = new Date();
  
  Transaction.create({
    memberid:req.body.memberid,
    day: req.body.day,
    out_date: new Date(),
    due_date: due.setDate(due.getDate() + parseInt(req.body.day)),
    booklist: req.body.booklist
  },(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  });
}

let findAllTransaction = (req,res)=>{
  Transaction.find()
    .populate({path: 'booklist', select: 'title'})
    .populate({path: 'memberid', select: 'name'})
    .exec(function (err, data) {
      if (err) res.send(err.message);
      console.log(data);
      res.send(data)
    });
}

let updateTransaction = (req,res)=>{
  let id = req.params.id;
  Transaction.findById(id,(err,data)=>{
    if (err) res.render(err.message);
      data.in_date = new Date();
      if (data.in_date > data.due_date) {
        let late = Math.round((data.in_date - data.due_date) / (1000*24*3600));
        let totalBook = data.booklist.length * 500;
        data.fine = late * totalBook;
      }else {
        data.fine = 0;
      }
      
      data.save(err => {
        if (err) err.send(err.message);
        console.log('update success');
        res.send(data);
      })
  })
}

let deleteTransaction = (req,res)=>{
  Transaction.findByIdAndRemove(req.params.id,(err)=>{
    if (err) res.send(err.message);
    res.send('data already delete')
  })
}

let findOneTransaction = (req,res) =>{
  Transaction.findById(req.params.id)
  .populate({path: 'booklist', select: 'title'})
  .populate({path: 'memberid', select: 'name'})
  .exec(function (err, data) {
    if (err) res.send(err.message);
    console.log(data);
    res.send(data)
  });
}

module.exports = {
  createTransaction,
  findAllTransaction,
  updateTransaction,
  deleteTransaction,
  findOneTransaction
}