import { Request } from "express";
import { ObjectId } from "mongoose";

declare global {
  namespace Express {
    interface Request {
      userId?: ObjectId;
    }
  }
}
