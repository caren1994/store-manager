const { idSchema, nameSchema } = require('./schema');

const validateId = (id) => { // chama o idshema e usa o validate para fazer a validação do q foi passado como parametro
  const { error } = idSchema.validate(id);// já me tras um obj error por isso a desconstrução
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
    return { type: null, message: '' };
};
const validateName = (name) => { // chama o idshema e usa o validate para fazer a validação do q foi passado como parametro
  const { error } = nameSchema.validate(name);
  if (error) {
 return {
    type: 'INVALID_VALUE',
    message: '"name" length must be at least 5 characters long',
  }; 
  }
      return { type: null, message: '' };
};

module.exports = {
  validateId,
  validateName,
};