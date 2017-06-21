'use strict'
const express = require('express');
const router = express.Router();
var controller = require('../controllers/customer_controller')

router.post('/',controller.createCustomer);
router.get('/',controller.getAllCustomer);
router.put('/:id',controller.updateCustomer);
router.delete('/:id',controller.deleteCustomer);
router.get('/:id',controller.findOneCustomer);

module.exports = router;