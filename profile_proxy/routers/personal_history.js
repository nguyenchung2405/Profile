const express = require("express");
const { createPersonalHistory, deletePersonalHistory } = require("../controller/PersonalHistory.controller");
const personalHistoryRouter = express.Router();

personalHistoryRouter.post("/", createPersonalHistory)
personalHistoryRouter.delete("/:per_his_id", deletePersonalHistory)

module.exports = {
    personalHistoryRouter
}