// Importaciones
const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Definimos rutas

// 1.- api/items
router.post('/', itemController.crearItem);
router.get('/', itemController.obtenerItems);
router.put('/:id', itemController.actualizarItem);
router.get('/:id', itemController.getItem);
router.delete('/:id', itemController.eliminarItem);

module.exports = router;
