import { Router } from "express";
import { register, login } from "../controllers/auth";

const router: Router = Router();

// register
router.post("/register", register);

// login
router.post("/login", login);

export default router;
