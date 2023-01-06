const express = require("express");
const positionRouter = express.Router();
const {getPositionList, getPositionTypeList, createPosType, updatePosType, deletePosType, 
createPositionAndManagement, updatePositionAndManagement, deletePositionAndManagement, getPositionsNameList, searchPosition} = require("../controller/Position.controller")

positionRouter.get("/",getPositionList)
positionRouter.get("/list", getPositionsNameList)
// Position Type
positionRouter.get("/position-types", getPositionTypeList)
positionRouter.post("/position-types", createPosType)
positionRouter.put("/position-types/:pos_id", updatePosType)
positionRouter.delete("/position-types/:pos_id", deletePosType)
// Position Management and Position
positionRouter.post("/position-management", createPositionAndManagement)
positionRouter.put("/position-management", updatePositionAndManagement)
positionRouter.delete("/position-management", deletePositionAndManagement)
positionRouter.get("/position-management", searchPosition)

module.exports = {
    positionRouter
}