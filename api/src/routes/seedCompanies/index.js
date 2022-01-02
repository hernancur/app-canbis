const express = require("express");
const seedCompanieRouter = express.Router();
const { SeedCompanieService } = require("../../services");

seedCompanieRouter.get("/", SeedCompanieService.get);

module.exports = seedCompanieRouter;
