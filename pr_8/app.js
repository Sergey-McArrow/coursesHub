import express from "express"
import { items } from "./const.js"
import { Book } from "./models/Book.js"

const port = process.env.PORT || 3333
const app = express()
app.use(express.json())

app.get("/items", async (_req, res) => {
  try {
    const books = await Book.findAll()
    res.json({ books })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.get("/item/:id", async (req, res) => {
  const { id } = req.params
  try {
    const item = await Book.findByPk(id)
    if (!item) res.status(404).json({ message: "Item not found" })
    res.json({ item })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.post("/item/add", async (req, res) => {
  const newItem = req.body

  if (!newItem || Object.keys(newItem).length === 0) {
    throw new Error({ message: "You must provide a new item" })
  }
  try {
    await Book.create(newItem)
    items.push(newItem)
    res.status(201).json({ message: "Added successfully", item: newItem })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

app.put("/item/:id", async (req, res) => {
  const { id } = req.params
  const updatedItem = req.body
  const index = items.findIndex((i) => i.id === Number(id))

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" })
  }
  if (!updatedItem || Object.keys(updatedItem).length === 0) {
    return res.status(400).json({ message: "You must provide a new item" })
  }
  items[index] = { ...items[index], ...updatedItem }

  res.json({ message: "Item updated successfully", item: items[index] })
})
app.delete("/item/:id", (req, res) => {
  const { id } = req.params
  const index = items.findIndex((item) => item.id === Number(id))

  if (index === -1) {
    return res.status(404).json({ message: "Item not found" })
  }

  const deletedItem = items[index]

  items.splice(index, 1)

  res.json({ message: "Item deleted successfully", item: deletedItem })
})

app.listen(port, () => {
  console.log("working on port: ", port)
})
