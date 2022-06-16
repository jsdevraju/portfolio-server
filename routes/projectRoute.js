import { Router } from 'express';
import { createProject, getProject, updateProject } from '../controllers/projectCtrl.js';
import { authAdmin } from '../middleware/authAdmin.js'

const router = Router();

router.post("/project", authAdmin,  createProject);
router.get("/projects", getProject);
router.put("/project/:id", authAdmin,  updateProject);

export default router;