"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormData = void 0;
// src/models/FormData.js
const mongoose_1 = __importDefault(require("mongoose"));
const formDataSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, { timestamps: true });
exports.FormData = mongoose_1.default.model('FormData', formDataSchema);
