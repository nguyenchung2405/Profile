const express = require("express");
const depRouter = express.Router();
const {getDepartmentList, getDepInfor, updateDepInfor, createDepartment, deleteDepartment} = require("../controller/Department.controller");

depRouter.get("/",getDepartmentList)
depRouter.post("/", createDepartment)
depRouter.get("/:dep_id", getDepInfor)
depRouter.put("/:dep_id", updateDepInfor)
depRouter.delete("/:dep_id", deleteDepartment)

module.exports = {
    depRouter
}