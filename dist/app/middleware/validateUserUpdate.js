"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateUserUpdate = void 0;
const express_validator_1 = require("express-validator");
exports.validateUserUpdate = [
    (0, express_validator_1.body)("name").optional().notEmpty().withMessage("Name must not be empty"),
    (0, express_validator_1.body)("technology")
        .optional()
        .notEmpty()
        .withMessage("Technology must not be empty"),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];
