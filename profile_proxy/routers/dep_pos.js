const express = require("express");
const { deleteDepPos } = require("../controller/depPos.controller");
const depPosRouter = express.Router();

depPosRouter.delete("/:depPosID", deleteDepPos)

module.exports = {
    depPosRouter
}