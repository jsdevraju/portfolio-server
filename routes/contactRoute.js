import { Router } from 'express';
import { sendMessage } from '../controllers/contactCtrl.js';

const router = Router();

router.post("/contact/me", sendMessage)

export default router;