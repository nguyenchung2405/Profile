const express = require("express");
const { createPersonalHistory, deletePersonalHistory, updatePersonalHistory } = require("../controller/PersonalHistory.controller");
const personalHistoryRouter = express.Router();

personalHistoryRouter.post("/", createPersonalHistory)
personalHistoryRouter.delete("/:per_his_id", deletePersonalHistory)
personalHistoryRouter.put("/:per_his_id", updatePersonalHistory)

module.exports = {
    personalHistoryRouter
}