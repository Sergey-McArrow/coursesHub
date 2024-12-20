import { Router } from "express";
import { createTask } from "../controllers/task";
import { authMiddleware } from "../middlewares/authMiddleware";

const router: Router = Router();

router.post("/", authMiddleware, createTask);
export default router;
