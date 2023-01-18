const express = require('express');
const { salesController } = require('../controllers');
const validateproductsId = require('../middlewares/validateProductsId');
const validateQuantity = require('../middlewares/validateQuantity');

const router = express.Router();

router.post('/', validateproductsId, validateQuantity, salesController.createSales);

module.exports = router;