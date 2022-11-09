const express = require("express");
const positionRouter = express.Router();
const {getPositionList, getPositionTypeList, createPosType, updatePosType, deletePosType} = require("../controller/Position.controller")

positionRouter.get("/",getPositionList)
positionRouter.get("/position-types", getPositionTypeList)
positionRouter.post("/position-types", createPosType)
positionRouter.put("/position-types/:pos_id", updatePosType)
positionRouter.delete("/position-types/:pos_id", deletePosType)

module.exports = {
    positionRouter
}