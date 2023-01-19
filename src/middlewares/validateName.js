const validateNameExist = (req, res, next) => { // verifica se tem um name
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();// passa para o proximo middleware
};
module.exports = {
  validateNameExist,
};