// src/routes/form.routes.js
import express from 'express';
import { saveFormData, getFormData, updateFormStatus } from '../controllers/form.controller';
 
const router = express.Router();
 
router.post('/saveform', saveFormData);
router.get('/getform', getFormData);
router.put('/updateform/:id', updateFormStatus);
 
export default router;