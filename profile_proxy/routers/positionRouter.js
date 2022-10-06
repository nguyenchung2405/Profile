const express = require("express");
const positionRouter = express.Router();
const {getPositionList} = require("../controller/Position.controller")

positionRouter.get("/",getPositionList)

module.exports = {
    positionRouter
}