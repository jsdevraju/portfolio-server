import { Router } from 'express';
import { createSkills, skills, updateSkills } from '../controllers/skillCtrl.js';
import { authAdmin } from '../middleware/authAdmin.js'

const router = Router();

router.post("/skill", authAdmin, createSkills)
router.get("/skills", skills)
router.put("/skill/:id", authAdmin,  updateSkills)

export default router;