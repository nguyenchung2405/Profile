const express = require("express");
const { userRouter } = require("./userRouter");
const rootRouter = express.Router();
const {checkQuery} = require("../middleware/user.middleware");
const { profileRouter } = require("./profileRouter");
const { depRouter } = require("./depRouter");
const { positionRouter } = require("./positionRouter");
const { partRouter } = require("./partRouter");

rootRouter.use("/user",checkQuery,userRouter);
rootRouter.use("/fe/profiles/users", profileRouter)
rootRouter.use("/departments",depRouter)
rootRouter.use("/positions",positionRouter)
rootRouter.use("/parts",partRouter)

module.exports = {
    rootRouter
}