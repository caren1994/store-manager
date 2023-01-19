const { salesService } = require('../services');
const errorMap = require('../utils/erroMap');

const createSales = async (req, res) => { // criando uma venda
  const newSales = req.body;
  const { type, message } = await salesService.createSales(newSales);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(201).json(message);
};

const findAll = async (req, res) => { // todas as vendas
  const { type, message } = await salesService.findAll();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};
const findId = async (req, res) => { // encontrando uma venda por id
  const { id } = req.params;
  const { type, message } = await salesService.findId(id);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};
const deleteSales = async (req, res) => { // deletando uma venda
  const { id } = req.params;
  const { type, message } = await salesService.deleteSales(id);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(204).json();
};
const updateSales = async (req, res) => { // atualizando uma venda
  const updatesale = req.body;
  const { id } = req.params;
   const { type, message } = await salesService.updateSales(id, updatesale);
    if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  createSales,
  findAll,
  findId,
  deleteSales,
  updateSales,
};