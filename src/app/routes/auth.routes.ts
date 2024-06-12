import express from "express";
import {
  getAllUsers,
  loginUser,
  registerUser,
  updateUser,
} from "../controllers/auth.controller";
import { forgotPassword, resetPassword } from "../controllers/auth.controller";


import { body } from "express-validator";
import { authenticateToken } from "../middleware/authMiddleware";
import { validateUserUpdate } from "../middleware/validateUserUpdate";

const router = express.Router();

// router.post("/register", registerUser);
// router.post("/loginuser", loginUser);

router.get("/getalluser", authenticateToken, getAllUsers);

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

 
// Forgot Password
router.post('/forgot-password', [
  body('email').isEmail().withMessage('Invalid email'),
], forgotPassword);
 
// Reset Password
router.post('/reset-password', [
  body('token').notEmpty().withMessage('Token is required'),
  body('newPassword').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
], resetPassword);

router.post('/users/:id', validateUserUpdate, updateUser)

export default router;
