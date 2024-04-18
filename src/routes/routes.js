const express = require ("express");
const router = express.Router();
const multer = require("multer");
const controller = require('../controller/controller')

// creando rutas

// Data
router.post('/setData/:collection', controller.setData);
router.get('/getData/:screen', controller.getData);

// Imagenes 
router.get("/getPic/:pic", controller.getPic)

module.exports = router;