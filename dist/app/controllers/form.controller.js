"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormData = exports.saveFormData = void 0;
// src/controllers/form.controller.js
const FormData_1 = require("../models/FormData");
const saveFormData = async (req, res) => {
    try {
        const { name, query, image } = req.body;
        const formData = new FormData_1.FormData({ name, query, image });
        await formData.save();
        res.status(201).json(formData);
    }
    catch (error) {
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
