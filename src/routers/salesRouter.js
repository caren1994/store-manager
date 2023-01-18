const express = require('express');
const { salesController } = require('../controllers');
const validateproductsId = require('../middlewares/validateProductsId');
const validateQuantity = require('../middlewares/validateQuantity');

const router = express.Router();

router.post('/', validateproductsId, validateQuantity, salesController.createSales);
router.get('/', salesController.findAll);
router.get('/:id', salesController.findId);

module.exports = router;