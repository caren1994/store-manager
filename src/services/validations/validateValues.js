const { idSchema, nameSchema } = require('./schema');

const validateId = (id) => {
  const { error } = idSchema.validate(id);// já me tras um obj error por isso a desconstrução
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
    return { type: null, message: '' };
};
const validateName = (name) => {
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