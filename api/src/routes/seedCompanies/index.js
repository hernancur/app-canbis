const express = require("express");
const seedCompanieRouter = express.Router();
const { SeedCompanieService } = require("../../services");

seedCompanieRouter.get("/", SeedCompanieService.get);
seedCompanieRouter.post("/create", SeedCompanieService.findCreate);

module.exports = seedCompanieRouter;
