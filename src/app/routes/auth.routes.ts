import express from "express";
import {
  loginUser,
  registerUser,
} from "../controllers/auth.controller";


import { body } from "express-validator";

const router = express.Router();

// Register a new user
router.post(
  "/register",
  [
    body("email").isEmail().isLowercase().withMessage("Invalid email"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  registerUser
);

// Login a user
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .trim()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  loginUser
);


export default router;
