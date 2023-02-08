"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_1 = __importDefault(require("../routes/users"));
class Server {
    constructor() {
        this.apiPath = {
            users: '/api/users',
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        // Definir las rutas
        this.routes();
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