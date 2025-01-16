const express = require("express");
const router = express.Router();
const  {getAllCategories} = require("../controller/CategoryController");
const { getDuasBySubcategory } = require("../controller/dua.controller");

router.get("/all-categories", getAllCategories)
router.get("/duas/:subcat_id", getDuasBySubcategory)
module.exports = router;