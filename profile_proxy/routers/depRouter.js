const express = require("express");
const depRouter = express.Router();
const {getDepartmentList, getDepInfor, updateDepInfor, createDepartment} = require("../controller/Department.controller");

depRouter.get("/",getDepartmentList)
depRouter.get("/:dep_id", getDepInfor)
depRouter.put("/:dep_id", updateDepInfor)
depRouter.post("/", createDepartment)

module.exports = {
    depRouter
}