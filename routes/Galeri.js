const express = require("express");
const router = express.Router();
const galeriController = require("../controllers/Galeri");

router.get("/", galeriController.getAllGaleri);
router.get("/:id", galeriController.getGaleriById);
router.post("/", galeriController.createGaleri);
router.put("/:id", galeriController.updateGaleri);
router.delete("/:id", galeriController.deleteGaleri);

module.exports = router;
