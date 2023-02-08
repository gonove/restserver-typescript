"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../routes/users"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.apiPath = {
            users: '/api/users',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        // Metodos iniciales
        this.middlewares();
        this.routes();
    }
    middlewares() {
        // CORS
        this.app.use((0, cors_1.default)());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPath.users, users_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`Running in ${this.port}`);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map