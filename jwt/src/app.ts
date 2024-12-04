import express from "express"
import cors from "cors"
import { connectDB } from "./db"
import authRouter from "./routes/auth"
import postsRouter from "./routes/posts"
import "dotenv/config"
import { authJWT } from "./middleware/auth"

const app = express()
const port = process.env.PORT || 1234

app.use(
  cors({
    origin: `http://localhost:${port}`,
    methods: ["GET", "POST", "PUT"],
  })
)

app.use(express.json())

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  })
  .catch((err: unknown) => {
    console.error("Failed to start server")
  })

app.use("/auth", authRouter)
app.use(authJWT)
app.use("/posts", postsRouter)
