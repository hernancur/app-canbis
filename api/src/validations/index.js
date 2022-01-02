const Joi = require("joi");

const seedCompanieValidation = Joi.object({
  name: Joi.string().required(),
  image: Joi.string().required(),
  url: Joi.string().required(),
  lineage: Joi.object().optional(),
  qr: Joi.string().optional(),
  description: Joi.string().optional(),
});

module.exports = { seedCompanieValidation };
