const connection = require('./connection');

const createSales = async () => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUES(NOW())');
  return insertId;
};

module.exports = {
createSales,
};
