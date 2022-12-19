const express = require("express");
const { getTableManagement } = require("../controller/TableManagement.controller");
const tableManagementRouter = express.Router();

tableManagementRouter.get("/", getTableManagement);

module.exports = {
    tableManagementRouter
}