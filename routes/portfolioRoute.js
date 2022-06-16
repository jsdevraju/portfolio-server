import { Router } from "express";
import {
  addComment,
  addReact,
  createPortfolio,
  deletePortfolio,
  getAllPortfolio,
  singlePortfolio,
  updatePortfolio,
} from "../controllers/portfolioCtrl.js";
import { authAdmin } from "../middleware/authAdmin.js";

const router = Router();

router.post("/add/portfolio", authAdmin, createPortfolio);
router.get("/portfolios", getAllPortfolio);
router.get("/portfolio/:id", singlePortfolio);
router.put("/portfolio/:id", authAdmin, updatePortfolio);
router.delete("/portfolio/:id", authAdmin, deletePortfolio);
router.post("/like/:portId", addReact);
router.post("/comment/:portId", addComment);

export default router;
