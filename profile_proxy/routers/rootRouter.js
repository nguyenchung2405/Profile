const express = require("express");
const { userRouter } = require("./userRouter");
const rootRouter = express.Router();
const {checkQuery} = require("../middleware/user.middleware")

rootRouter.use("/user",checkQuery,userRouter);

// Lấy danh sách người dùng để render table
// rootRouter.get("/user",checkQuery)

module.exports = {
    rootRouter
}