import { Router } from "express"
import { register } from "../controllers/auth/register"
import { login } from "../controllers/auth/login"
import { updateEmail } from "../controllers/auth/updateEmail"
import { authJWT } from "../middleware/auth"
import { deleteAccount } from "../controllers/auth/deleteAccount"

const router = Router()

router.post("/register", register)
router.post("/login", login)
router.post("/update-email", authJWT, updateEmail)
router.delete("/delete-account", authJWT, deleteAccount)

export default router
