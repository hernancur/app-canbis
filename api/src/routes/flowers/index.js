const express = require("express");
const flowerRouter = express.Router();
const { FlowerService } = require("../../services");

flowerRouter.get("/", FlowerService.get);
flowerRouter.post("/create", FlowerService.findCreate);

module.exports = flowerRouter;
