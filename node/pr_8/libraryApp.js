import express from "express"
import cors from "cors"
import { sequelize } from "./config/db.js"
import { Book } from "./models/Book.js"

const PORT = process.env.PORT || 3333
const app = express()
app.use(express.json())
app.use(cors())

app.get("/books", async (_req, res) => {
  try {
    const books = await Book.findAll()
    res.json({ books })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.get("/books/:id", async (req, res) => {
  const { id } = req.params
  try {
    const book = await Book.findByPk(id)
    if (!book) {
      return res.status(404).json({ message: "Book not found" })
    }
    res.json({ book })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.post("/books/add", async (req, res) => {
  const newBook = req.body
  try {
    if (!newBook || Object.keys(newBook).length === 0) {
      return res.status(400).json({ message: "You must provide a new book" })
    }
    const book = await Book.create(newBook)
    res.status(201).json({ message: "Added successfully", book })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.put("/books/:id", async (req, res) => {
  const { id } = req.params
  const updatedBook = req.body
  try {
    if (!updatedBook || Object.keys(updatedBook).length === 0) {
      return res
        .status(400)
        .json({ message: "You must provide book data to update" })
    }

    const book = await Book.findByPk(id)
    if (!book) {
      return res.status(404).json({ message: "Book not found" })
    }

    await book.update(updatedBook)
    res.json({ message: "Book updated successfully", book })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.delete("/books/:id", async (req, res) => {
  const { id } = req.params
  try {
    const book = await Book.findByPk(id)
    if (!book) {
      return res.status(404).json({ message: "Book not found" })
    }

    await book.destroy()
    res.json({ message: "Book deleted successfully" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.listen(PORT, async () => {
  try {
    await sequelize.authenticate()
    console.log("Connection has been established successfully.")
    console.log("Listen port: ", PORT)
  } catch (error) {
    console.error(error)
  }
})
