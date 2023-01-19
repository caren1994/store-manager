const { productsModel } = require('../models');
const schema = require('./validations/validateValues');

const findAll = async () => {
  const products = await productsModel.findAll();// chama a model
  if (!products) return { type: 'PRODUCTS_NOT_FOUND', message: 'Products not found' };// se nao tiver retorna erro
  return { type: null, message: products };
};
const findId = async (id) => {
  const error = schema.validateId(id);// chama o validate para fazer a validação do id caso tenha error retorna o erro para o controller
  console.log(error);
  if (error.type) return error;

  const product = await productsModel.findId(id);// chama a model
  if (!product) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };// se nao tiver retorna erro

  return { type: null, message: product };
};

const newProduct = async (name) => {
   const error = schema.validateName(name);

  if (error.type) return error;
  const product = await productsModel.newProduct(name);
 return { type: null, message: product };
};
const updateProduct = async (id, name) => {
     const error = schema.validateName(name);// faz a validação

  if (error.type) return error;
    const { type } = await findId(id);// recupera o type do findId usado para saber se existe aquele produto
  if (type) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  const result = await productsModel.updateProduct(id, name);// chama a model se tiver o produto
  return { type: null, message: result };
};
const deleteProduct = async (id) => {
   const { type } = await findId(id);// verifica se existe o produto
  if (type) return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
  const result = await productsModel.deleteProduct(id);// chama a model
  return { type: null, message: result };
};
const searchProducts = async (q) => {
  const result = await productsModel.searchProducts(q);// chama a model passando o parametro 

  if (result.length === 0) { // caso nao ache ele retorna todos os produtos
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