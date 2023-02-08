"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const router = (0, express_1.Router)();
router.get('/', users_controller_1.getUsers);
router.get('/:id', users_controller_1.getUser);
router.post('/', users_controller_1.postUser);
router.put('/:id', users_controller_1.putUser);
router.delete('/:id', users_controller_1.deleteUser);
exports.default = router;
//# sourceMappingURL=users.js.map