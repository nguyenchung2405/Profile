const express = require("express");
const { createOrganization, deleteOrganization, updateOrganization } = require("../controller/Organization.controller");
const organizationRouter = express.Router();

organizationRouter.post("/", createOrganization)
organizationRouter.delete("/:organ_id", deleteOrganization)
organizationRouter.put("/:organ_id", updateOrganization)

module.exports = {
    organizationRouter
}