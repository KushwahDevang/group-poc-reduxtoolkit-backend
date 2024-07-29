"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormData = exports.saveFormData = void 0;
const FormData_1 = require("../models/FormData");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const saveFormData = async (req, res) => {
    var _a;
    try {
        const { name, query } = req.body;
        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
        }
        const image = ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) || '';
        const formData = new FormData_1.FormData({ name, query, image });
        console.log("save dataa mmmm", formData);
        await formData.save();
        console.log("save dataa", formData);
        res.status(201).json(formData);
    }
    catch (error) {
        console.error("serverrrrr ee", error);
        res.status(400).json({ message: "Internal server error" });
    }
};
exports.saveFormData = saveFormData;
const getFormData = async (req, res) => {
    try {
        const data = await FormData_1.FormData.find();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(400).json({ message: "Internal server error" });
    }
};
exports.getFormData = getFormData;
// // Serve images statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
