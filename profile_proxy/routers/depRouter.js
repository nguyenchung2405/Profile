const express = require("express");
const depRouter = express.Router();
const {getDepartmentList} = require("../controller/Department.controller");

depRouter.get("/",getDepartmentList)

module.exports = {
    depRouter
}