"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Notas_1 = require("../controllers/Notas");
const router = (0, express_1.Router)();
router.get('/', Notas_1.getProductos);
router.get('/:id', Notas_1.getProducto);
router.delete('/:id', Notas_1.deleteProducto);
router.post('/', Notas_1.postProducto);
router.put('/:id', Notas_1.updateProducto);
exports.default = router;
