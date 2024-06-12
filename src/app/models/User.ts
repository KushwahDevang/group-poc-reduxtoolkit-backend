import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    technology: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    token: { type: String },
  },
  {
    timestamps: true, // Add timestamp fields
  }
);

export const User = mongoose.model("User", userSchema);
