const { SeedCompanie } = require("../../db");
const axios = require("axios");
const { COMPANIES_GET_API } = require("../../helpers/constants");
const { seedCompanieValidation } = require("../../validations");

var counter = 0;

class SeedCompanieService {
  static async get(req, res, next) {
    try {
      const companies = await SeedCompanie.findAll();

      res.json({ message: "Success!", companies: companies });
    } catch (error) {
      return next(error);
    }
  }

  static async findCreate(req, res, next) {
    try {
      const { error } = seedCompanieValidation.validate(req.body);

      if (error) return res.status(400).json({ message: error });

      const { name, image, url, lineage, qr, description } = req.body;

      const [newSeedCompany] = await SeedCompanie.findOrCreate({
        where: {
          name,
          image,
          url,
          lineage,
          qr,
          description,
        },
      });

      res.send(newSeedCompany);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = SeedCompanieService;
