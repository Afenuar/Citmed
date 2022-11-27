const express = require("express");
const router = express.Router();
const noviosController = require("../controllers/novios.controller");

router.post("/", noviosController.create);

router.get("/", noviosController.find);
router.get("/:id", noviosController.findOne);
router.put("/:id", noviosController.update);
router.delete("/:id", noviosController.remove);

module.exports = router;
