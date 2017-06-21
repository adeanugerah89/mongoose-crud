'use strict'

var Books = require('../models/books');

var createBook = (req,res)=>{
  Books.create({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  },(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var findAllBook = (req,res)=>{
  Books.find({},(err,result)=>{
    if (err) {
      res.send(err.message)
    }
    console.log(result);
    res.send(result)
  })
}

var updateBook =(req,res)=>{
  Books.findById(req.params.id,(err,data)=>{
    if (err) {
      res.send(err)
    }
    data.isbn = req.body.isbn || data.isbn;
    data.title = req.body.title || data.title;
    data.author = req.body.author || data.author;
    data.category = req.body.category || data.category;
    data.stock = req.body.stock || data.stock;
    
    data.save((err,data) =>{
      if (err) {
        res.send(err)
      }
      res.send(data)
      console.log('data already update');
    })
  })
}

var deleteBook = (req,res)=>{
  Books.findByIdAndRemove(req.params.id,(err)=>{
      if (err) {
        res.send(err)
      }
      res.send('data already delete')
  })
}

var findOneBook = (req,res)=>{
  Books.findById(req.params.id,(err,data)=>{
    if (err) {
      re.send(err)
    }
    console.log(data);
    res.send(data)
  })
}

module.exports = {
  createBook,
  findAllBook,
  updateBook,
  deleteBook,
  findOneBook
}; 




