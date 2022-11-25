const express = require("express");
const { createFamilyRelationship, updateFamilyRelationship } = require("../controller/familyRelationship.controller");
const familyRelationshipRouter = express.Router();

familyRelationshipRouter.post("/", createFamilyRelationship)
familyRelationshipRouter.put("/:fa_re_id", updateFamilyRelationship)

module.exports = {
    familyRelationshipRouter
}