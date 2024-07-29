import { FormData } from '../models/FormData';
import { Request, Response } from "express";
import path from 'path'
import express from "express";


const app = express();

export const saveFormData = async (req: Request, res: Response) => {
  try {
    const { name, query } = req.body;
        // Check if file is uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'Image is required' });
          }
    const image = req.file?.filename || '';
    const formData = new FormData({ name, query, image });
    console.log("save dataa mmmm",formData)
    await formData.save();
    console.log("save dataa",formData)
    res.status(201).json(formData);
  } catch (error) {
    console.error("serverrrrr ee",error)
    res.status(400).json({ message: "Internal server error" });
  }
};
 
export const getFormData = async (req: Request, res: Response) => {
  try {
    const data = await FormData.find();
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
};

// // Serve images statically
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));