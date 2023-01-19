const { productsService } = require('../services');
const errorMap = require('../utils/erroMap');

const findAll = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json({ message });

  res.status(200).json(message);
};

const findId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findId(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

const newProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await productsService.newProduct(name);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};
const updateProduct = async (req, res) => {
    const { name } = req.body;
  const { id } = req.params;
  const { type, message } = await productsService.updateProduct(id, name);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.deleteProduct(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).json();
};
const searchProducts = async (req, res) => {
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