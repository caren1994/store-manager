const connection = require('./connection');

const findAll = async () => { // todas os produtos
  const [result] = await connection.execute('SELECT * FROM StoreManager.products');// query para procurar todos

  return result;// retorna 
};
const findId = async (id) => { // procura o id
  const [[product]] = await connection.execute(// para se conectar com o banco e fazer a chamada da query 
    'SELECT * FROM StoreManager.products WHERE id=?', // procura aonde o id é igual a 
    [id], // esse fica no lugar do ?
  );
  return product;
};
const newProduct = async (name) => { // cadastra novo produto
  const [{ insertId }] = await connection.execute(// pega o insert id do result desconstruindo
    'INSERT INTO StoreManager.products (name) VALUE (?)', [name],
  );// inserindo valores coluna name valor ? [name]
  console.log(insertId);
  return { id: insertId, name };// devolvendo a chave insertid e o name como pedido
};
const updateProduct = async (id, name) => { // atualizando produto
  const query = 'UPDATE StoreManager.products SET name = ? WHERE id = ?';// update aonde a coluna é ? e o id é ?
   await connection.execute(query, [name, id]);// name e id colocar no lugar do ? na ordem que foram colocados aqui
  return { id, name };
};
const deleteProduct = async (id) => { // deletando produto 
  const query = 'DELETE FROM  StoreManager.products  WHERE id = ?';// delete aonde o id é 
  const [result] = await connection.execute(query, [id]);

  return result;
};
const searchProducts = async (q) => { // procura aonde tenha o q na palavra 
  const name = `%${q}%`;// pode ter algo escrito antes ou depois 
  const query = 'SELECT * FROM StoreManager.products WHERE name LIKE ?';
  const [result] = await connection.execute(query, [name]);
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
