const axios = require("axios");
const { Flower, SeedCompanie } = require("../db");

const FLOWER_GET_API = "https://api.otreeba.com/v1/flowers";

const COMPANIES_GET_API = "https://api.otreeba.com/v1/seed-companies";

const chargeFlowers = async (req, res, next) => {
  try {
    const aux = await axios.get(FLOWER_GET_API);

    const reset = aux.data.data.map((f) => {
      return {
        name: f.name,
        image: f.image,
        info: f.url,
      };
    });

    await Flower.bulkCreate(reset);

    res.send("flowers created");
  } catch (error) {
    console.log(error);
  }
};

const chargeCompanies = async (req, res, next) => {
  try {
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

    res.send("companies created");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  FLOWER_GET_API,
  chargeFlowers,
  chargeCompanies,
  COMPANIES_GET_API,
};
