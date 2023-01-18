const connection = require('./connection');

const findAll = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');

  return result;
};
const findId = async (id) => {
  const [[product]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id=?',
    [id],
  );
  return product;
};
const newProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)', [name],
  );
  console.log(insertId);
  return { id: insertId, name };
};
const updateProduct = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';
   await connection.execute(query, [name, id]);
  return { id, name };
};

module.exports = {
  findAll,
  findId,
  newProduct,
  updateProduct,
};
