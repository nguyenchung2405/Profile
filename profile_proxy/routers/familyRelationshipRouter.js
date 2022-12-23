const express = require("express");
const { createFamilyRelationship, updateFamilyRelationship, createFamilyRelaStep7, updateFamilyRelaStep7 } = require("../controller/familyRelationship.controller");
const familyRelationshipRouter = express.Router();

familyRelationshipRouter.post("/", createFamilyRelationship)
familyRelationshipRouter.post("/step7", createFamilyRelaStep7)
familyRelationshipRouter.put("/step7",  updateFamilyRelaStep7)
familyRelationshipRouter.put("/:fa_re_id", updateFamilyRelationship)

module.exports = {
    familyRelationshipRouter
}