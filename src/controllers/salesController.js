const { salesService } = require('../services');
const errorMap = require('../utils/erroMap');

const createSales = async (req, res) => {
  const newSales = req.body;
  const { type, message } = await salesService.createSales(newSales);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const findAll = async (req, res) => {
  const { type, message } = await salesService.findAll();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};
const findId = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await salesService.findId(id);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  createSales,
  findAll,
  findId,
};