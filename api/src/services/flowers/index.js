const { Flower } = require("../../db.js");
const { flowerValidation } = require("../../validations/index.js");

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
      const { error } = flowerValidation.validate(req.body);

      if (error) return res.status(400).json({ message: error });

      const { name, image, info } = req.body;

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
