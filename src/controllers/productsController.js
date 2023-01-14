const { productsService } = require('../services');
const errorMap = require('../utils/erroMap');

const findAll = async (_req, res) => {
  const { type, message } = await productsService.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);

  res.status(200).json(message);
};

const findId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productsService.findId(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};
module.exports = {
  findAll,
  findId,
};