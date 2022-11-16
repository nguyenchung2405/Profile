const express = require("express");
const profileRouter = express.Router();
const {getProfile} = require("../controller/Profile.controller");

profileRouter.get("/:id", getProfile)
profileRouter.post("/create", getProfile)

module.exports = {
    profileRouter
}