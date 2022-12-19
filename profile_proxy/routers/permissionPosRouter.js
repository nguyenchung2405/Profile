const express = require("express");
const { getPermissionPos } = require("../controller/permissionPos.controller");
const permissionPosRouter = express.Router();

permissionPosRouter.get("/position-management", getPermissionPos);

module.exports = {
    permissionPosRouter
}