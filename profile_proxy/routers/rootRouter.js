const express = require("express");
const { userRouter } = require("./User");
const rootRouter = express.Router();

rootRouter.use("/user",userRouter);

// Lấy danh sách người dùng để render table
rootRouter.get("/user")

module.exports = {
    rootRouter
}