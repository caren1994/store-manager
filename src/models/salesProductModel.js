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

const findAll = async () => {
  const query = `SELECT s.date as date, sp.sale_id as saleId, sp.product_id as productId,
  sp.quantity as quantity FROM sales AS s INNER JOIN sales_products AS sp 
  ON s.id = sp.sale_id ORDER BY sale_id,product_id`;
  const [result] = await connection.execute(query);
  return result;
};
const findId = async (id) => {
  const query = `SELECT s.date,sp.product_id as productId,sp.quantity 
  FROM sales AS s INNER JOIN sales_products AS sp
   ON s.id = sp.sale_id WHERE ID=? ORDER BY product_id`;
  const [result] = await connection.execute(query, [id]);
  return result;
};
module.exports = {
  createSaleProduct,
  findAll,
  findId,
};