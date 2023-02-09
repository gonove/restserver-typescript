"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const users_controller_1 = require("../controllers/users.controller");
const db_validator_1 = require("../helpers/db-validator");
const validate_fields_1 = __importDefault(require("../middlewares/validate-fields"));
const router = (0, express_1.Router)();
router.get('/', users_controller_1.getUsers);
router.get('/:id', [
    (0, express_validator_1.check)('id').isNumeric(),
    (0, express_validator_1.check)('id').custom(db_validator_1.userExistsId),
    validate_fields_1.default,
], users_controller_1.getUser);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obligatorio').notEmpty(),
    // check('password', 'El password es obligatorio y debe ser tener mas de 6 digitos ').isLength({min:6 }),
    (0, express_validator_1.check)('email', 'El correo no es valido').isEmail(),
    (0, express_validator_1.check)('email').custom(db_validator_1.emailExist),
    validate_fields_1.default
], users_controller_1.postUser);
router.put('/:id', [
    (0, express_validator_1.check)('id').isNumeric(),
    (0, express_validator_1.check)('id').custom(db_validator_1.userExistsId),
    validate_fields_1.default
], users_controller_1.putUser);
router.delete('/:id', [
    (0, express_validator_1.check)('id').isNumeric(),
    (0, express_validator_1.check)('id').custom(db_validator_1.userExistsId),
    validate_fields_1.default
], users_controller_1.deleteUser);
exports.default = router;
