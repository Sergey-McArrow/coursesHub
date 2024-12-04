import express from "express"
import cors from "cors"
import { sequelize } from "./config/db.js"
import authRoutes from "./routes/auth.js"

const app = express()
const PORT = process.env.PORT || 3333

app.use(cors())
app.use(express.json())

app.use("/auth", authRoutes)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "Something went wrong!" })
})

const start = async () => {
  try {
    await sequelize.sync()
    console.log("Database synced successfully")

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  } catch (error) {
    console.error("Unable to start server:", error)
    process.exit(1)
  }
}

start()
