const Joi = require('joi');

const idSchema = Joi.number().min(1).required();

module.exports = {
  idSchema,
};