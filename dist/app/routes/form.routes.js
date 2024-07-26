"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/form.routes.js
const express_1 = __importDefault(require("express"));
const form_controller_1 = require("../controllers/form.controller");
const router = express_1.default.Router();
router.post('/saveform', form_controller_1.saveFormData);
router.get('/getform', form_controller_1.getFormData);
exports.default = router;
