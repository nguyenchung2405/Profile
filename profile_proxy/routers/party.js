const express = require("express");
const { createParty, updateParty } = require("../controller/Party.controller");
const partyRouter = express.Router();

partyRouter.post("/", createParty)
partyRouter.put("/:party_id", updateParty)

module.exports = {
    partyRouter
}