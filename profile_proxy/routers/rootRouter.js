
const express = require("express");
const { userRouter } = require("./userRouter");
const rootRouter = express.Router();
const { checkQuery, createNewUser } = require("../middleware/user.middleware");
const { profileRouter } = require("./profileRouter");
const { depRouter } = require("./depRouter");
const { positionRouter } = require("./positionRouter");
const { partRouter } = require("./partRouter");
const { uploadUserAvatar } = require("../controller/UploadAvatar.controller");
const { uploadImageAvatar } = require("../middleware/upload");
const { createProfile, checkUserID, updateProfile } = require("../middleware/profile.middleware");
const { create_dep_pos_degree_jourCard, update_dep_pos_degress_jourCard, getUserInfor } = require("../controller/Profile.controller");
const { depPosRouter } = require("./dep_pos");
const { personalHistoryRouter } = require("./personal_history");
const { partyRouter } = require("./party");
const { organizationRouter } = require("./organizationRouter");
const { trainingFosteringRouter } = require("./trainingFosteringRouter");
const { rewardDisciplineRouter } = require("./rewardDisciplineRouter");
const { familyRelationshipRouter } = require("./familyRelationshipRouter");
const { uploadFileIport } = require("../middleware/importData.middleware");
const { importUser } = require("../controller/UploadFileImport.controller");

rootRouter.use("/user", checkQuery, userRouter);
rootRouter.use("/fe/profiles/users", profileRouter)
rootRouter.use("/profiles", profileRouter)
rootRouter.use("/departments", depRouter)
rootRouter.use("/positions", positionRouter)
rootRouter.use("/parts", partRouter)
rootRouter.use("/user-dep-pos", depPosRouter)
rootRouter.use("/personal-history", personalHistoryRouter)
rootRouter.use("/party", partyRouter)
rootRouter.use("/organization", organizationRouter)
rootRouter.use("/training-fostering", trainingFosteringRouter)
rootRouter.use("/reward-discipline", rewardDisciplineRouter)
rootRouter.use("/family-relationship", familyRelationshipRouter)

rootRouter.get("/users/users/me", getUserInfor)
rootRouter.put("/profiles/update", checkUserID, updateProfile, update_dep_pos_degress_jourCard)
rootRouter.post("/upload", uploadImageAvatar(), uploadUserAvatar)
rootRouter.post("/create", createNewUser, createProfile, create_dep_pos_degree_jourCard);
rootRouter.post("/create/profile", checkUserID, createProfile, create_dep_pos_degree_jourCard);
rootRouter.post("/profiles/importation", uploadFileIport(), importUser)

module.exports = {
    rootRouter
}