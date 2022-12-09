const express = require("express");
const profileRouter = express.Router();
const {getProfile, getProfileByUserID} = require("../controller/Profile.controller");

profileRouter.get("/:id", getProfile)
profileRouter.post("/create", getProfile)
profileRouter.get("/user/:user_id", getProfileByUserID)

module.exports = {
    profileRouter
}