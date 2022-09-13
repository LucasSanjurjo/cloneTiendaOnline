const express = require("express");
const router = express.Router();
const path = require("path");
const productsController = require("../controllers/productsController");

router.get("/registroProducto", productsController.register);
router.get("/listado", productsController.list);
router.post("/registroProducto/:id", productsController.register);

module.exports = router;