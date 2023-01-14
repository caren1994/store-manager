const { idSchema } = require('./schema');

const validateId = (id) => {
  const { error } = idSchema.validate(id);// já me tras um obj error por isso a desconstrução
  if (error) return { type: 'INVALID_VALUE', message: '"id" must be a number' };
    return { type: null, message: '' };
};
module.exports = {
  validateId,
};