// src/routes/form.routes.js
import express from 'express';
import { saveFormData, getFormData } from '../controllers/form.controller';
 
const router = express.Router();
 
router.post('/saveform', saveFormData);
router.get('/getform', getFormData);
 
export default router;