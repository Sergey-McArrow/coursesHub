import { Router } from "express"
import { createPost } from "../controllers/post/createPost"

const router = Router()

router.post("/create", createPost)

router.get("/one", (req, res) => {
  res.send("post received")
})

router.get("/all", (req, res) => {
  res.send("all post received")
})

export default router
