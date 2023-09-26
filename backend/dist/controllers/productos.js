"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNota = exports.postProducto = exports.deleteProducto = exports.getNota = void 0;
const nota_1 = __importDefault(require("../models/nota"));
const getNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listNotas = yield nota_1.default.findAll();
    res.json(listNotas);
});
exports.getNota = getNota;
const getNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const nota = yield nota_1.default.findByPk(id);
    if (nota) {
        res.json(nota);
    }
    else {
        res.status(404).json({ msg: 'No existe una nota con el id ${id}'
        });
    }
});
exports.getNota = getNota;
const deleteProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const producto = yield Producto.findByPk(id);
    if (!producto) {
        res.status(404).json({ msg: 'No existe un producto con el id ${id}'
        });
    }
    else {
        yield producto.destroy();
        res.json({ msg: 'El producto fue eliminado con éxito'
        });
    }
});
exports.deleteProducto = deleteProducto;
const postProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield Producto.create(body);
        res.json({
            msg: 'El producto fue agregado con éxito'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error al ingresar producto'
        });
    }
});
exports.postProducto = postProducto;
const updateNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    const nota = yield nota_1.default.findByPk(id);
    try {
        if (nota) {
            yield nota.update(body);
            res.json({ msg: 'La nota fue actualizada con éxito' });
        }
        else {
            res.json({ msg: 'No existe una nota con el id $(id)' });
        }
    }
    catch (error) {
        res.json({ msg: 'Ups, ocurrio un error' });
    }
});
exports.updateNota = updateNota;
