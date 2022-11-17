const express = require("express");
const router = express.Router();
const citasController = require("../controllers/citas.controller");

router.post("/", citasController.create)
router.get("/", citasController.find)
router.get("/:id", citasController.findOne)
router.put("/:id", citasController.update)
router.delete("/:id", citasController.remove)


module.exports = router