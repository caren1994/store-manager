const validateProductsId = (req, res, next) => {
  const bodyreq = req.body;

  const id = (reqbody) => reqbody.every((item) => item.productId);

  if (!id(bodyreq)) return res.status(400).json({ message: '"productId" is required' });

  next();
};

module.exports = validateProductsId;
