const express = require("express");
const { getPermissionDepPos, postPermissionDepPos, deletePermissionDepPos, getPermissionDepPosList } = require("../controller/permissionDepPos.controller");
const permissionDepPosRouter = express.Router();

permissionDepPosRouter.get("/position-management", getPermissionDepPos)
permissionDepPosRouter.get("/exists-dep-pos/list", getPermissionDepPosList)
permissionDepPosRouter.post("/", postPermissionDepPos)
permissionDepPosRouter.delete("/", deletePermissionDepPos)

module.exports = {
    permissionDepPosRouter
}