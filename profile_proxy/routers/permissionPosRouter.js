const express = require("express");
const { getPermissionPos, deletePermissionPosition, postPermissionPosition, getPermissionPositionList } = require("../controller/permissionPos.controller");
const permissionPosRouter = express.Router();

permissionPosRouter.get("/position-management", getPermissionPos);
permissionPosRouter.get("/exists-dep-pos/list", getPermissionPositionList);
permissionPosRouter.delete("/", deletePermissionPosition);
permissionPosRouter.post("/", postPermissionPosition);

module.exports = {
    permissionPosRouter
}