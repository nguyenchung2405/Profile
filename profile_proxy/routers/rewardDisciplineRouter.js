const express = require("express");
const { createRewardDiscipline } = require("../controller/rewardDiscipline.middleware");
const rewardDisciplineRouter = express.Router();

rewardDisciplineRouter.post("/", createRewardDiscipline)

module.exports = {
    rewardDisciplineRouter
}