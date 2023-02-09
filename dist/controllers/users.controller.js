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
exports.deleteUser = exports.putUser = exports.postUser = exports.getUser = exports.getUsers = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const query = { where: {
            estado: 1
        } };
    const { limite = 5, desde = 0 } = req.query;
    // const usuarios = await User.findAll( query )
    const [total, usuarios] = yield Promise.all([
        usuario_1.default.count(query),
        usuario_1.default.findAll({
            offset: Number(desde),
            limit: Number(limite)
        })
    ]);
    res.json({
        total,
        usuarios
    });
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    if (!usuario) {
        return res.status(404).json({
            msg: `El usuario: ${id} no existe </3`
        });
    }
    res.json({
        usuario
    });
});
exports.getUser = getUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        const usuario = usuario_1.default.build(body);
        yield usuario.save();
        return res.json({
            usuario
        });
    }
    catch (error) {
        return res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { body } = req;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        yield (usuario === null || usuario === void 0 ? void 0 : usuario.update(body));
        res.json({
            usuario
        });
    }
    catch (error) {
        return res.status(400).json({
            msg: '</3',
            error
        });
    }
});
exports.putUser = putUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const usuario = yield usuario_1.default.findByPk(id);
        yield (usuario === null || usuario === void 0 ? void 0 : usuario.update({ estado: false }));
    }
    catch (error) {
        return res.status(500).json({
            msg: 'el delete falló </3',
            error
        });
    }
    res.json({
        msg: 'deleteUser',
        id
    });
});
exports.deleteUser = deleteUser;
