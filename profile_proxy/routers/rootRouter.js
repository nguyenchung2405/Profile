const express = require("express");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");
const { userRouter } = require("./userRouter");
const rootRouter = express.Router();
const { checkQuery, createNewUser } = require("../middleware/user.middleware");
const { profileRouter } = require("./profileRouter");
const { depRouter } = require("./depRouter");
const { positionRouter } = require("./positionRouter");
const { partRouter } = require("./partRouter");
const {
  uploadUserAvatar,
  uploadFileStep5,
  uploadFileStep7,
} = require("../controller/UploadAvatar.controller");
const {
  uploadImageAvatar,
  uploadStep5,
  uploadStep7,
  exportExcel,
} = require("../middleware/upload");
const {
  createProfile,
  checkUserID,
  updateProfile,
} = require("../middleware/profile.middleware");
const {
  create_dep_pos_degree_jourCard,
  update_dep_pos_degress_jourCard,
  getUserInfor,
  update_dep_pos_degress_jourCard2,
} = require("../controller/Profile.controller");
const FormData = require('form-data');
const fs=require("fs")
const { depPosRouter } = require("./dep_pos");
const { personalHistoryRouter } = require("./personal_history");
const { partyRouter } = require("./party");
const { organizationRouter } = require("./organizationRouter");
const { trainingFosteringRouter } = require("./trainingFosteringRouter");
const { rewardDisciplineRouter } = require("./rewardDisciplineRouter");
const { familyRelationshipRouter } = require("./familyRelationshipRouter");
const { uploadFileIport } = require("../middleware/importData.middleware");
const { importUser,exportUser } = require("../controller/UploadFileImport.controller");
const { permissionRouter } = require("./permissionRouter");
const { tableManagementRouter } = require("./tableManagementRouter");
const { permissionPosRouter } = require("./permissionPosRouter");
const { permissionDepPosRouter } = require("./permissionDepPosRouter");
const multer = require("multer");
const axios=require("axios")
var storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});
const API_URL = `${process.env.apiUser}`;
const proxyOptions = {
  target: API_URL,
  changeOrigin: true,
  pathRewrite: {
      [`^/api`]: '',
  },
}
// const proxy=createProxyMiddleware(proxyOptions)
// app.use('/api/users/exportation',proxy)
// app.use("/api/users/exportation",function(req,res){
//   const config = {
//     headers: { Authorization: req.headers.authorization },
//   };
//   axios.get(
//     `${process.env.apiUser}/users/exportation/xlxs`,
//     req.body.objCheck,
//     config
//   ).then((res)=>{
//    try {
//     const formData= new FormData();
//     formData.append("file",e.target.files)
// res.send(res)
//    } catch (error) {
//     console.log(error)
//    }
//   })
// })
var get_cookies = function(request) {
  var cookies = {};
  request.headers && request.headers.cookie.split(';').forEach(function(cookie) {
    var parts = cookie.match(/(.*?)=(.*)$/)
    cookies[ parts[1].trim() ] = (parts[2] || '').trim();
  });
  return cookies;
};
rootRouter.get("/users/exportation/xlxs",async(req,res)=>{
  try {
    const { data } = await axios(
   {
    url:`${process.env.apiUser}/users/exportation/xlxs`,
  method:'GET',
  responseType: "arraybuffer",
  headers: {
    'Content-Type':"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    Authorization: `Bearer ${get_cookies(req)['usertoken']}`,
}
   }
    );
    // res.send(data);
    res.send({
      status:"Success",
      data
    })
  } catch (error) {
    console.log(error);
    res.send({
      status:"loi",error
    });
  }
})
rootRouter.use("/user", checkQuery, userRouter);
rootRouter.use("/fe/profiles/users", profileRouter);
rootRouter.use("/profiles", profileRouter);
rootRouter.use("/departments", depRouter);
rootRouter.use("/positions", positionRouter);
rootRouter.use("/parts", partRouter);
rootRouter.use("/user-dep-pos", depPosRouter);
rootRouter.use("/personal-history", personalHistoryRouter);
rootRouter.use("/party", partyRouter);
rootRouter.use("/organization", organizationRouter);
rootRouter.use("/training-fostering", trainingFosteringRouter);
rootRouter.use("/reward-discipline", rewardDisciplineRouter);
rootRouter.use("/family-relationship", familyRelationshipRouter);
rootRouter.use("/permissions", permissionRouter);
rootRouter.use("/table-management", tableManagementRouter);
rootRouter.use("/permission-position", permissionPosRouter);
rootRouter.use("/permission-department-position", permissionDepPosRouter);
// rootRouter.get("/exportation",upload.single("filesExcel"),exportExcel)

rootRouter.get("/users/users/me", getUserInfor);
rootRouter.put(
  "/profiles/update",
  checkUserID,
  updateProfile,
  update_dep_pos_degress_jourCard
);
rootRouter.put(
  "/profiles/update/me",
  checkUserID,
  updateProfile,
  update_dep_pos_degress_jourCard2
);
rootRouter.put(
  "/profiles/updateactive",
  checkUserID,
  update_dep_pos_degress_jourCard
);
rootRouter.post("/upload", upload.single("image3x4"), uploadUserAvatar);
rootRouter.post("/upload/step5", uploadStep5(), uploadFileStep5);
rootRouter.post("/upload/step7", upload.single("filePDF"), uploadFileStep7);
rootRouter.post(
  "/create",
  createNewUser,
  createProfile,
  create_dep_pos_degree_jourCard
);
rootRouter.post(
  "/create/profile",
  checkUserID,
  createProfile,
  create_dep_pos_degree_jourCard
);
// rootRouter.post("/profiles/importation", uploadFileIport(), importUser)
// rootRouter.use("/users/exportation", upload.single("file"), exportUser)

module.exports = {
  rootRouter,
};
