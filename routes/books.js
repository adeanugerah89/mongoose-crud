'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/books_controller')

/* GET main endpoint. */
router.post('/', controller.createBook);
router.get('/', controller.findAllBook);
router.put('/:id', controller.updateBook);
router.delete('/:id', controller.deleteBook);
router.get('/:id', controller.findOneBook);

module.exports = router;
