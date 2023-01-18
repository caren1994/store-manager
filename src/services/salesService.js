const { salesModel, salesProductModel, productsModel } = require('../models');

const findAllId = async (newSales) => {
  const existId = await Promise.all(
    newSales.map(async (item) => {
      const productId = await productsModel.findId(item.productId);
      if (!productId) return false;
      return true;
    }),
  );

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
module.exports = {
createSales,
};