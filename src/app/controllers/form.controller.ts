// src/controllers/form.controller.js
import { FormData } from '../models/FormData';
import { Request, Response } from "express";

 
export const saveFormData = async (req: Request, res: Response) => {
  try {
    const { name, query, image } = req.body;
    const formData = new FormData({ name, query, image });
    await formData.save();
    res.status(201).json(formData);
  } catch (error) {
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