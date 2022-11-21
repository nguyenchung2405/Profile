const express = require("express");
const { createTrainingFostering, deleteTrainingFostering, updateTrainingFostering } = require("../controller/TrainingFostering.controller");
const trainingFosteringRouter = express.Router();

trainingFosteringRouter.post("/", createTrainingFostering)
trainingFosteringRouter.delete("/:tr_pos_id", deleteTrainingFostering)
trainingFosteringRouter.put("/:tr_pos_id", updateTrainingFostering)

module.exports = {
    trainingFosteringRouter
}