"use strict";
//auth.controller
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.registerUser = void 0;
const express_validator_1 = require("express-validator");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../models/User");
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = require("mongoose");
dotenv_1.default.config();
const registerUser = async (req, res) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { name, email, password } = req.body;
        // Check if the user already exists
        const existingUser = await User_1.User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash the password
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        // Create a new user with timestamps
        const newUser = await User_1.User.create({
            name,
            email,
            password: hashedPassword,
        });
        // Generate an authorization token
        const token = jsonwebtoken_1.default.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "30m",
        });
        res.status(201).json({
            message: "User registered successfully",
            token,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt,
        });
    }
    catch (error) {
        if (error instanceof mongoose_1.Error.ValidationError) {
            // Handle Mongoose validation errors
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            return res.status(400).json({ errors: validationErrors });
        }
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.registerUser = registerUser;
//Login user
const loginUser = async (req, res) => {
    try {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        // Check if the user exists
        const existingUser = await User_1.User.findOne({ email });
        if (!existingUser) {
            return res.status(404).json({ message: "User not found" });
        }
        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt_1.default.compare(password, existingUser.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }
        // Generate an authorization token
        const token = jsonwebtoken_1.default.sign({ userId: existingUser._id }, process.env.JWT_SECRET, {
            expiresIn: "30m",
        });
        res.status(200).json({
            message: "Token generate successfully",
            token,
            user: {
                name: existingUser.name,
                email: existingUser.email,
                createdAt: existingUser.createdAt,
                updatedAt: existingUser.updatedAt,
            },
        });
    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};
exports.loginUser = loginUser;
