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
const express_1 = __importDefault(require("express"));
const notas_1 = __importDefault(require("../routes/notas"));
const conection_1 = __importDefault(require("../db/conection"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbconnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('listening on port  ${this.port}');
        });
    }
    routes() {
        this.app.get('/', (req, res) => {
            res.json({ msg: 'API working' });
        });
        this.app.use('/api/notas', notas_1.default);
    }
    midlewares() {
        this.app.use(express_1.default.json());
        // Cors
        this.app.use((0, cors_1.default)());
    }
    dbconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                conection_1.default.authenticate();
                console.log('db connected');
            }
            catch (error) {
                console.log(error);
                console.log('Error al conectar ');
            }
        });
    }
}
exports.default = Server;
