const validateProductsId = (req, res, next) => { 
  const bodyreq = req.body;

  const id = (reqbody) => reqbody.every((item) => item.productId);// verifica se todos tem o productid
// id guarda o resultado da função que utiliza o every
  if (!id(bodyreq)) return res.status(400).json({ message: '"productId" is required' });//
// se não for true retorna erro 
  next();
};

module.exports = validateProductsId;
