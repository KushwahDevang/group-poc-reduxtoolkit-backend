import express from 'express'
import register from '../routes/auth.routes';
import formRoutes from "../routes/form.routes"


const router = express.Router();

//user routes
router.use("/user", register);

//from routes
router.use('/form', formRoutes);

export default router;
