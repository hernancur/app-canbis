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
      const { name, url } = req.body;

      if (!name || !url)
        res.json({ error: "Missing properties to create new strain" });

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
