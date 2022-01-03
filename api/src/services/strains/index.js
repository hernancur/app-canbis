const { Strain } = require("../../db");

class StrainService {
  static async get(req, res, next) {
    try {
      const allStrains = await Strain.findAll();

      res.json({ message: "Success!", strains: allStrains });
    } catch (error) {
      return next(error);
    }
  }

  static async findCreate(req, res, next) {
    try {
      const { error } = strainValidation.validate(req.body);

      if (error) return res.status(400).json({ message: error });

      const { name, url } = req.body;

      const [newStrain] = await Strain.findOrCreate({
        where: {
          name,
          url,
        },
      });

      res.send(newStrain);
    } catch (error) {
      return next(error);
    }
  }
}

module.exports = StrainService;
