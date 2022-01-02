const express = require("express");
const strainRouter = express.Router();
const { StrainService } = require("../../services");

strainRouter.get("/", StrainService.get);

module.exports = strainRouter;
