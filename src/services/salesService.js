const { salesModel, salesProductModel, productsModel } = require('../models');

const findAllId = async (newSales) => {
  const existId = await Promise.all(
    newSales.map(async (item) => {
      const productId = await productsModel.findId(item.productId);
      console.log(`message:${productId}`);
      if (!productId) return false;
      return true;
    }),
  );
  console.log(existId);
  return existId;
};

const createSales = async (newSales) => {
  await salesModel.createSales();

  const exist = await findAllId(newSales);
  const idExist = exist.every((e) => e === true);
  if (idExist) {
    const result = await salesProductModel.createSaleProduct(newSales);
    if (result) return { type: null, message: result };
 }
    return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const findAll = async () => {
  const result = await salesProductModel.findAll();
  return { type: null, message: result };
};
const findId = async (id) => {
  const result = await salesProductModel.findId(id);
  if (result.length === 0) return { type: 'PRODUCT_NOT_FOUND', message: 'Sale not found' };
  return { type: null, message: result };
};
module.exports = {
  createSales,
  findAll,
  findId,
  findAllId,
};