const { productsModel } = require('../models');
const schema = require('./validations/validateValues');

const findAll = async () => {
  const products = await productsModel.findAll();
  if (!products) return { type: 'PRODUCTS_NOT_FOUND', message: 'Products not found' };
  return { type: null, message: products };
};
const findId = async (id) => {
  const error = schema.validateId(id);
  console.log(error);
  if (error.type) return error;

  const product = await productsModel.findId(id);
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };

  return { type: null, message: product };
};

const newProduct = async (name) => {
   const error = schema.validateName(name);
  if (error.type) return error;
  const product = await productsModel.newProduct(name);
 if (product) return { type: null, message: product };
return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};
module.exports = {
  findAll,
  findId,
  newProduct,
};