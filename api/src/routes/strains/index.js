const express = require("express");
const strainRouter = express.Router();
const { StrainService } = require("../../services");

strainRouter.get("/", StrainService.get);
strainRouter.post("/create-strain", StrainService.findCreate);

module.exports = strainRouter;
