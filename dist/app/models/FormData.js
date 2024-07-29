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
        required: true,
    },
    ProductDetails: {
        type: String,
        required: true,
    },
    productImage: {
        type: String
    },
    productId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Not Set",
        enum: ["InProgress", "Pending", "Complete", "Not Set"],
    },
});
exports.FormData = mongoose_1.default.model('FormData', formDataSchema);
