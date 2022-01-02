const { Router } = require("express");
const flower = require("./flowers");
const strain = require("./strains");
const seedCompanies = require("./seedCompanies");

const router = Router();

router.use("/flowers", flower);
router.use("/strains", strain);
router.use("/seed-companies", seedCompanies);

module.exports = router;
