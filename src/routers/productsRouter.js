const express = require('express');
const { productsController } = require('../controllers');
const { validateNameExist } = require('../middlewares/validateName');

const router = express.Router();// definindo rotas que vão chamar o controlle ou um middleware de validação

router.put('/:id', validateNameExist, productsController.updateProduct);
router.post('/', validateNameExist, productsController.newProduct);
router.delete('/:id', productsController.deleteProduct);
router.get('/search', productsController.searchProducts);
router.get('/', productsController.findAll);
router.get('/:id', productsController.findId);

module.exports = router;