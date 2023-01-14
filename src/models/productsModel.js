const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM products');

  return result;
};
const findId = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id=?',
    [id],
  );
  return product;
};

module.exports = {
  findAll,
  findId,
};
