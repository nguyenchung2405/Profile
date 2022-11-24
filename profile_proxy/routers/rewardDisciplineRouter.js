const express = require("express");
const { createRewardDiscipline, deleteRewardDiscipline, updateRewardDiscipline } = require("../controller/rewardDiscipline.middleware");
const rewardDisciplineRouter = express.Router();

rewardDisciplineRouter.post("/", createRewardDiscipline)
rewardDisciplineRouter.delete("/:re_dis_id", deleteRewardDiscipline)
rewardDisciplineRouter.put("/:re_dis_id", updateRewardDiscipline)

module.exports = {
    rewardDisciplineRouter
}