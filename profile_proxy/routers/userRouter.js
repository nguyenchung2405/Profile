const express = require("express");
const userRouter = express.Router();
const {getAvatar, deleteResource, getUserPermission} = require("../controller/User.controller");

userRouter.get("/resources/:id", getAvatar)
userRouter.get("/users/me/permissions", getUserPermission)
userRouter.delete("/resources/:id", deleteResource)

module.exports = {
    userRouter
}