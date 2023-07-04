const express = require("express");
const profileRouter = express.Router();
const {getProfile, getProfileByUserID} = require("../controller/Profile.controller");

profileRouter.post("/create", getProfile)
profileRouter.get("/user/:user_id", getProfileByUserID)
profileRouter.get("/:id", getProfile)

module.exports = {
    profileRouter
}