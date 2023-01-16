const express = require('express');
const { productsController } = require('../controllers');
const { validateNameExist } = require('../middlewares/validateName');

const router = express.Router();

router.post('/', validateNameExist, productsController.newProduct);
router.get('/', productsController.findAll);
router.get('/:id', productsController.findId);

module.exports = router;