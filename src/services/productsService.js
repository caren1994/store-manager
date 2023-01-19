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
 return { type: null, message: product };
};
const updateProduct = async (id, name) => {
     const error = schema.validateName(name);

  if (error.type) return error;
    const { type } = await findId(id);
  if (type) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  const result = await productsModel.updateProduct(id, name);
  return { type: null, message: result };
};
const deleteProduct = async (id) => {
   const { type } = await findId(id);
  if (type) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  const result = await productsModel.deleteProduct(id);
  return { type: null, message: result };
};
const searchProducts = async (q) => {
  const result = await productsModel.searchProducts(q);

  if (result.length === 0) {
    const resultAll = await productsModel.findAll();
    return resultAll;
  }

  return result;
};

module.exports = {
  findAll,
  findId,
  newProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};