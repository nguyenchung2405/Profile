const express = require("express");
const userRouter = express.Router();
const {getAvatar, deleteResource, getUserPermission, getDetailUser} = require("../controller/User.controller");

userRouter.get("/resources/:id", getAvatar)
userRouter.get("/users/me/permissions", getUserPermission)
userRouter.get("/:user_id", getDetailUser)
userRouter.delete("/resources/:id", deleteResource)

module.exports = {
    userRouter
}