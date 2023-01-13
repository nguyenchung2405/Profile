const express = require("express");
const { getPermissionPos, deletePermissionPosition, postPermissionPosition } = require("../controller/permissionPos.controller");
const permissionPosRouter = express.Router();

permissionPosRouter.get("/position-management", getPermissionPos);
permissionPosRouter.delete("/", deletePermissionPosition);
permissionPosRouter.post("/", postPermissionPosition);

module.exports = {
    permissionPosRouter
}