const axios=require("axios")
const express = require("express");

const userRouter = express.Router();
const {getAvatar, deleteResource, getUserPermission, getDetailUser} = require("../controller/User.controller");
var get_cookies = function(request) {
    var cookies = {};
    request.headers && request.headers.cookie.split(';').forEach(function(cookie) {
      var parts = cookie.match(/(.*?)=(.*)$/)
      cookies[ parts[1].trim() ] = (parts[2] || '').trim();
    });
    return cookies;
  };
userRouter.get("/resources/:id", getAvatar)
userRouter.get("/users/me/permissions", getUserPermission)
userRouter.get("/:user_id", getDetailUser)
userRouter.delete("/resources/:id", deleteResource)
userRouter.get("/exportation/xlxs",async(req,res)=>{
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
      res.send(data);
    //   res.send({
    //     status:"Success",
    //     data
    //   })
    } catch (error) {
      console.log(error);
      res.send({
        status:"loi",error
      });
    }
  })
module.exports = {
    userRouter
}