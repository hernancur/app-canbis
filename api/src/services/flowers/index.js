const axios = require("axios");
const { FLOWER_GET_API } = require("../../helpers/constants");
const { Flower } = require("../../db.js");

class FlowerService {
  static async get(req, res, next) {
    try {
      const allFlowers = await Flower.findAll();

      res.json({ message: "Success!", flowers: allFlowers });
    } catch (error) {
      return next(error);
    }
  }

  static async findCreate(req, res, next) {
    try {
      const { name, image, info } = req.body;

      if (!name || !image || !info)
        res.json({ error: "Missing properties to create new flower" });

      const [newFlower] = await Flower.findOrCreate({
        where: {
          name,
          image,
          info,
        },
      });

      res.send(newFlower);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = FlowerService;
