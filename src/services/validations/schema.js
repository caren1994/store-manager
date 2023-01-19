const Joi = require('joi');// SCHEMA que faz a validação com o joi para saber se esá de acordo

const idSchema = Joi.number().min(1).required();
const nameSchema = Joi.string().min(5).required();

module.exports = {
  idSchema,
  nameSchema,
};