import { Router } from 'express';
import { createExperience, getExperience, updateExperience } from '../controllers/exprienceCtrl.js';
import { authAdmin } from '../middleware/authAdmin.js'

const router = Router();

router.post("/experience", authAdmin, createExperience);
router.post("/experiences", getExperience);
router.put("/experience/:id", authAdmin, updateExperience);


export default router;