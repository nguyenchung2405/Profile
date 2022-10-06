const express = require("express");
const { getParts } = require("../controller/Part.controller");
const partRouter = express.Router();

partRouter.get("/", getParts)

module.exports = {
    partRouter
}