import express from 'express';
import multer from 'multer';
import path from 'path';
import { saveFormData, getFormData } from '../controllers/form.controller';
 
const router = express.Router();
 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});
 
const upload = multer({ storage });
 
router.post('/saveform', upload.single('image'), saveFormData);
router.get('/getform', getFormData);
 
export default router;