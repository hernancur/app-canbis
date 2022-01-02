const axios = require("axios");
const { Flower } = require("../db");

const FLOWER_GET_API = "https://api.otreeba.com/v1/flowers";

const COMPANIES_GET_API = "https://api.otreeba.com/v1/seed-companies";

const charge = async (req, res, next) => {
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

    res.send("ok");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  FLOWER_GET_API,
  charge,
  COMPANIES_GET_API,
};
