const connection = require('./connection');

const createSaleProduct = async (newSales) => {
const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES( ?, ?, ? )';
const saleId = 'SELECT * FROM StoreManager.sales_products ORDER BY sale_id DESC LIMIT 1';
    const [[result]] = await connection.execute(saleId);
  const id = result.sale_id + 1;

const sales = await Promise.all(
  newSales.map(async (item) => {
    await connection.execute(query, [id, item.productId, item.quantity]);
    return item;
  }),
);

  return { id, itemsSold: sales };
};
module.exports = {
  createSaleProduct,
};