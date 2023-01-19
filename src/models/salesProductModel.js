const connection = require('./connection');

const createSaleProduct = async (newSales) => { // criando nova venda com os produtos e quantity
const query = 'INSERT INTO sales_products (sale_id, product_id, quantity) VALUES( ?, ?, ? )';// query usada para inserir a nova venda 
const saleId = 'SELECT * FROM StoreManager.sales_products ORDER BY sale_id DESC LIMIT 1';// query usada para procurar o campo sale_id e ordenar ele de forma decrescente apenas com 1
    const [[result]] = await connection.execute(saleId);
  const id = result.sale_id + 1;// pegaa o resultado de sale_id e acrescenta +1

const sales = await Promise.all(
  newSales.map(async (item) => { // faz a criação de uma vz pelo map 
    await connection.execute(query, [id, item.productId, item.quantity]);// faz o execute da query colocando os valores no lugar da ?
    return item;
  }),
);

  return { id, itemsSold: sales };// retorna como foi pedido 
};

const findAll = async () => { // retorna todas 
  const query = `SELECT s.date as date, sp.sale_id as saleId, sp.product_id as productId,
  sp.quantity as quantity FROM sales AS s INNER JOIN sales_products AS sp 
  ON s.id = sp.sale_id ORDER BY sale_id,product_id`;// faz o select nas colunas mudando os nomes da tabela sale com junção na tabela sp aonde o id de sale é igual ao sale_id da tabela sp ordenando
  const [result] = await connection.execute(query);
  return result;
};
const findId = async (id) => { // 1 venda 
  const query = `SELECT s.date,sp.product_id as productId,sp.quantity 
  FROM sales AS s INNER JOIN sales_products AS sp
   ON s.id = sp.sale_id WHERE ID=? ORDER BY product_id`;// mesma coisa de cima porem encontrando o id pedido 
  const [result] = await connection.execute(query, [id]);
  console.log(result);
  return result;
};
const deleteSales = async (id) => { // deletando
  const query = 'DELETE FROM StoreManager.sales_products WHERE sale_id = ?'; // deleta aquela venda que for de acordo com o id 
  const [result] = await connection.execute(query, [id]);
  return result;
};
const updateSales = async (id, updatesale) => { // alterando venda
   const sale = await Promise.all(// promisse all para resolver tudo antes de continuar 
    updatesale.map(async (item) => { // faz o map no array enviado pelo controller 
      await connection.execute(
        'UPDATE StoreManager.sales_products SET quantity = ? WHERE sale_id = ? and product_id = ?', // faz a alteração aonde o quantity é igual a ? o id igual a ? e productid igual a ?
        [item.quantity, id, item.productId], // paraa trocar pelos ?
      );
      return item;
    }),
  );

  return { saleId: (id), itemsUpdated: sale };// retorna da forma q pediu 
};

module.exports = {
  createSaleProduct,
  findAll,
  findId,
  deleteSales,
  updateSales,
};