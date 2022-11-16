const express = require("express");
const userRouter = express.Router();
const {getAvatar} = require("../controller/User.controller");

userRouter.get("/resources/:id", getAvatar)

module.exports = {
    userRouter
}