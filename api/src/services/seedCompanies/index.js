const { SeedCompanie } = require("../../db");
const axios = require("axios");
const { COMPANIES_GET_API } = require("../../helpers/constants");

var counter = 0;

class SeedCompanieService {
  static async get(req, res, next) {
    try {
      let companies = [];
      if (counter === 0) {
        const apiCompanies = await axios.get(COMPANIES_GET_API);
        companies = apiCompanies.data.data?.map((c) => {
          return {
            name: c.name,
            image: c.image,
            url: c.url,
            lineage: c.lineage,
            qr: c.qr,
            description: c.description,
          };
        });
        await SeedCompanie.bulkCreate(companies);
        counter = 999;
      }

      let finalCompanies = [...companies, ...(await SeedCompanie.findAll())];

      res.json({ message: "Success!", companies: finalCompanies });
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = SeedCompanieService;
