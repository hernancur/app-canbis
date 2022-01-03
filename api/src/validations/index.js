const Joi = require("joi");

const seedCompanieValidation = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  url: Joi.string().required(),
  lineage: Joi.object().optional(),
  qr: Joi.string().optional(),
  description: Joi.string().optional(),
});

const strainValidation = Joi.object({
  name: Joi.string().required(),
  url: Joi.string().required(),
});

const flowerValidation = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  info: Joi.string().required(),
});

module.exports = { seedCompanieValidation, strainValidation, flowerValidation };
