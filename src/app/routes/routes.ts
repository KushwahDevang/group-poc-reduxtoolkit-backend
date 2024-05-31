import express from 'express'
import register from '../routes/auth.routes';


const router = express.Router();

//user routes
router.use("/user", register);

export default router;
