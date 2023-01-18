const { salesService } = require('../services');
const errorMap = require('../utils/erroMap');

const createSales = async (req, res) => {
  const newSales = req.body;
  const { type, message } = await salesService.createSales(newSales);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

module.exports = {
  createSales,
};