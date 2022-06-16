import { Router } from 'express';
import { adminLogin, adminLogout } from '../controllers/adminCtrl.js';

const router = Router();

router.post("/login", adminLogin);
router.get("/logout", adminLogout);

export default router