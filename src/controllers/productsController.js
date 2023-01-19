const { productsService } = require('../services');
const errorMap = require('../utils/erroMap');

const findAll = async (_req, res) => {
  const { type, message } = await productsService.findAll();// função que busca todos os produtos
// desconstroi o type e o message e se type não fou null o res chama o meu errormap para fazer a validação do erro e o converter para 404 etc...
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);// se tudo der certo res.status de sucesso
};

const findId = async (req, res) => { // para achar apenas 1 produto
  const { id } = req.params;// desconstroi o id do params
  const { type, message } = await productsService.findId(id); // desconstroi o type e o message 
  if (type) return res.status(errorMap.mapError(type)).json({ message });// mesmo caso do errormap
  res.status(200).json(message);// sucesso
};

const newProduct = async (req, res) => { // cadastrando um novo produto
  const { name } = req.body;// desconstroi o name do body
  const { type, message } = await productsService.newProduct(name);// chama a camada service 
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};
const updateProduct = async (req, res) => { // atualizando um produto
    const { name } = req.body;// desconstrução
  const { id } = req.params;// desconstrução
  const { type, message } = await productsService.updateProduct(id, name);// chama a camada service 
    if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};
const deleteProduct = async (req, res) => { // deletando um produto
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).json();
};
const searchProducts = async (req, res) => { // procurando um produto 
  const { q } = req.query;
  const result = await productsService.searchProducts(q);
  res.status(200).json(result);
};
module.exports = {
  findAll,
  findId,
  newProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
};