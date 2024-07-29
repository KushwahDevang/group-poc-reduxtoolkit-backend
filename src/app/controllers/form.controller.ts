// src/controllers/form.controller.js
import { FormData } from '../models/FormData';
import { Request, Response } from "express";

 
export const saveFormData = async (req: Request, res: Response) => {
  try {
    const {  productId, name, ProductDetails, productImage, status } = req.body;
    const formData = new FormData({ productId, name, ProductDetails, productImage, status });
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

export const updateFormStatus = async (req: Request, res: Response)  => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const updatedForm = await FormData.findByIdAndUpdate(id, { status }, { new: true });
    res.status(200).json(updatedForm);
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
};