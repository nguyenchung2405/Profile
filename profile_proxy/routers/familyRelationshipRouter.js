const express = require("express");
const { createFamilyRelationship, updateFamilyRelationship, createFamilyRelaStep7, updateFamilyRelaStep7, createFamilyRelaStep7Con, updateFamilyRelaConStep7 } = require("../controller/familyRelationship.controller");
const familyRelationshipRouter = express.Router();

familyRelationshipRouter.post("/", createFamilyRelationship)
familyRelationshipRouter.post("/step7", createFamilyRelaStep7)
familyRelationshipRouter.post("/con-step7", createFamilyRelaStep7Con)
familyRelationshipRouter.put("/step7",  updateFamilyRelaStep7)
familyRelationshipRouter.put("/con-step7",  updateFamilyRelaConStep7)
familyRelationshipRouter.put("/:fa_re_id", updateFamilyRelationship)

module.exports = {
    familyRelationshipRouter
}