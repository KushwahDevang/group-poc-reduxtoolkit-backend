// src/models/FormData.ts
import mongoose from 'mongoose';

const formDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    query: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
},
    { timestamps: true }
);

export const FormData = mongoose.model('FormData', formDataSchema);