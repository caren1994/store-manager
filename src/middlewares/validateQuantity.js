const validateQuantity = (req, res, next) => {
  const bodyreq = req.body;
  
  const existQuantity = (reqbody) => reqbody.every((item) => !item.quantity);
  const quantityValue = (reqbody) =>
    reqbody.every((item) => item.quantity === 0 || item.quantity < 0);
  if (quantityValue(bodyreq)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  if (existQuantity(bodyreq)) {
    return res.status(400).json({ message: '"quantity" is required' });
  }

  next();
};

module.exports = validateQuantity;
