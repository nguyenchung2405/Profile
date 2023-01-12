const express = require("express");
const userRouter = express.Router();
const {getAvatar, deleteResource} = require("../controller/User.controller");

userRouter.get("/resources/:id", getAvatar)
userRouter.delete("/resources/:id", deleteResource)

module.exports = {
    userRouter
}