"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const router = express_1.default.Router();
//user routes
router.use("/user", auth_routes_1.default);
exports.default = router;
