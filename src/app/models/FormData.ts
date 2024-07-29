// src/models/FormData.js
import mongoose from "mongoose";

const formDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    ProductDetails: {
        type: String,
        required: true,
    },
    productImage: {
        type: String
    },
    productId: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: "Not Set",
        enum: ["InProgress", "Pending", "Complete", "Not Set"],
    },
});

export const FormData = mongoose.model('FormData', formDataSchema);