const axios = require("axios");
const express = require("express");
const userRouter = express.Router();
const app = express();
const {
  getAvatar,
  deleteResource,
  getUserPermission,
  getDetailUser,
} = require("../controller/User.controller");
var get_cookies = function (request) {
  var cookies = {};
  request.headers &&
    request.headers.cookie.split(";").forEach(function (cookie) {
      var parts = cookie.match(/(.*?)=(.*)$/);
      cookies[parts[1].trim()] = (parts[2] || "").trim();
    });
  return cookies;
};
userRouter.get("/resources/:id", getAvatar);
userRouter.get("/users/me/permissions", getUserPermission);
userRouter.get("/:user_id", getDetailUser);
userRouter.delete("/resources/:id", deleteResource);
userRouter.get("/exportation/xlxs", async (req, res) => {
//   await axios
//     .get(`${process.env.apiUser}/users/exportation/xlxs`,{headers:{
//         'Authorization': `Bearer ${get_cookies(req)["usertoken"]}`,

//     }})
//     .then(async (resp) => {
//     //   res.setHeader({
//     //     "Content-Disposition":
//     //       'attachment; filename="Danh sach nhân viên.xlsx"',
       
//     //   });
//       res.setHeader ({
//         "Content-Type":
//         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
//       })
//       res.setHeader( "Authorization", `Bearer ${get_cookies(req)["usertoken"]}`)
//       res.download(resp)
//       res.send(resp);
//     })
//     .catch((error) => {
//       // Xử lý lỗi nếu có
//       console.error(error);
//       res.status(500).send("Internal Server Errorrrrr");
//     });
    try {
        console.log("afgakjgo;jhgo;hj")
        let {headers: {authorization}} = req;
      const { data } = await axios({
        url: `${process.env.apiUser}/users/exportation/xlxs`,
        method: "GET",
        responseType: "arraybuffer",
        headers: {
          "Content-Type":
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
          Authorization: authorization,
          "Content-Disposition": "attachment; filename=" + "fileNameExcel.xlsx",
        },
      });
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(500).send(error)
      res.send({
        
        status: "loi",
        error,
      });
    }
});

module.exports = {
  userRouter,
};
