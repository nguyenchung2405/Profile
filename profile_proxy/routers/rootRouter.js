const express = require("express");
const { userRouter } = require("./userRouter");
const rootRouter = express.Router();
const {checkQuery, createNewUser} = require("../middleware/user.middleware");
const { profileRouter } = require("./profileRouter");
const { depRouter } = require("./depRouter");
const { positionRouter } = require("./positionRouter");
const { partRouter } = require("./partRouter");
const { uploadUserAvatar } = require("../controller/UploadAvatar.controller");
const {uploadImageAvatar} = require("../middleware/upload");
const { createProfile } = require("../middleware/profile.middleware");
const { create_dep_pos_degree_jourCard } = require("../controller/Profile.controller");

rootRouter.use("/user",checkQuery,userRouter);
rootRouter.use("/fe/profiles/users", profileRouter)
rootRouter.use("/departments",depRouter)
rootRouter.use("/positions",positionRouter)
rootRouter.use("/parts",partRouter)
rootRouter.post("/upload",uploadImageAvatar(),uploadUserAvatar)
rootRouter.post("/create",createNewUser, createProfile, create_dep_pos_degree_jourCard);
module.exports = {
    rootRouter
}