const express = require("express");
const { createParty } = require("../controller/Party.controller");
const partyRouter = express.Router();

partyRouter.post("/", createParty)

module.exports = {
    partyRouter
}