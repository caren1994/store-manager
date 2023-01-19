const connection = require('./connection');

const createSales = async () => { // criando a venda 
  const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUES(NOW())');// inserindo na tabela sales na coluna date a data atual
  return insertId;
};

module.exports = {
createSales,
};
