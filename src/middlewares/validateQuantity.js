const validateQuantity = (req, res, next) => {
  const bodyreq = req.body;
  
  const existQuantity = (reqbody) => reqbody.every((item) => !item.quantity);
  // verifica se não tem quantity
  const quantityValue = (reqbody) =>
    reqbody.every((item) => item.quantity === 0 || item.quantity < 0);
  // verifica se quantity é ===0 ou menor que zero
  if (quantityValue(bodyreq)) { // se for retorna erro 
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (existQuantity(bodyreq)) { // se não tiver retorna erro 
    return res.status(400).json({ message: '"quantity" is required' });
  }

  next();
};

module.exports = validateQuantity;
