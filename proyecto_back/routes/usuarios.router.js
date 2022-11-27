const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios.controller");

router.post("/login", usuariosController.login);

// router.get("/", noviosController.find);
// router.get("/:id", noviosController.findOne);
// router.put("/:id", noviosController.update);
// router.delete("/:id", noviosController.remove);

module.exports = router;
