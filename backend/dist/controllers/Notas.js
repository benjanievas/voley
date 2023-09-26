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
exports.updateNota = exports.postNota = exports.deleteNota = exports.getNota = exports.getNotas = void 0;
const nota_1 = __importDefault(require("../models/nota"));
const getNotas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listNotas = yield nota_1.default.findAll();
    res.json(listNotas);
});
exports.getNotas = getNotas;
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
const deleteNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const nota = yield nota_1.default.findByPk(id);
    if (!nota) {
        res.status(404).json({ msg: 'No existe una nota con el id ${id}'
        });
    }
    else {
        yield nota.destroy();
        res.json({ msg: 'La Nota fue eliminada con éxito'
        });
    }
});
exports.deleteNota = deleteNota;
const postNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield nota_1.default.create(body);
        res.json({
            msg: 'La Nota fue agregado con éxito'
        });
    }
    catch (error) {
        res.json({
            msg: 'Error al ingresar la Nota'
        });
    }
});
exports.postNota = postNota;
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
