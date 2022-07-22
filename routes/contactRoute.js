import { Router } from 'express';
import { allMessage, sendMessage } from '../controllers/contactCtrl.js';
import { authAdmin } from '../middleware/authAdmin.js';


const router = Router();

router.post("/contact/me", sendMessage)
router.get("/all-message", authAdmin, allMessage)

export default router;