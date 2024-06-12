import { body, validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";

export const validateUserUpdate = [
  body("name").optional().notEmpty().withMessage("Name must not be empty"),
  body("technology")
    .optional()
    .notEmpty()
    .withMessage("Technology must not be empty"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
