'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/transactions_controller')

router.post('/',controller.createTransaction);
router.get('/',controller.findAllTransaction);
router.put('/:id',controller.updateTransaction);
router.delete('/:id',controller.deleteTransaction);
router.get('/:id',controller.findOneTransaction);

module.exports = router;