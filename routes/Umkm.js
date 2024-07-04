const express = require("express");
const router = express.Router();
const umkmController = require("../controllers/Umkm");

router.get("/", umkmController.getAllUmkm);
router.get("/:id", umkmController.getUmkmById);
router.post("/", umkmController.createUmkm);
router.put("/:id", umkmController.updateUmkm);
router.put("/:id", umkmController.updateUmkm);
router.delete("/:id", umkmController.deleteUmkm);

module.exports = router;
