const express = require("express");
const { getPermissionList, createPermission, updatePermission, deletePermission } = require("../controller/permission.controller");
const permissionRouter = express.Router();

permissionRouter.get("/", getPermissionList);
permissionRouter.post("/", createPermission)
permissionRouter.put("/:per_id", updatePermission)
permissionRouter.delete("/:per_id", deletePermission)

module.exports = {
    permissionRouter
}