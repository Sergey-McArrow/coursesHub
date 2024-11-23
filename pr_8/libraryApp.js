import express from 'express'
import { books } from './const.js'

const port = process.env.PORT || 3333
const app = express()
app.use(express.json())

app.get('/books', (_req, res) => {
	res.json({ books })
})

app.get('/book/:id', (req, res) => {
	const { id } = req.params
	const book = books.find(i => i.id == Number(id))
	if (!book) res.status(404).json({ message: 'book not found' })
	res.json({ book })
})

app.post('/book/add', (req, res) => {
	const newbook = req.body

	if (!newbook || Object.keys(newbook).length === 0) {
		return res.status(400).json({ message: 'You must provide a new book' })
	}

	books.push(newbook)
	res.status(201).json({ message: 'Added successfully', book: newbook })
})

app.put('/book/:id', (req, res) => {
	const { id } = req.params
	const updatedbook = req.body
	const index = books.findIndex(i => i.id === Number(id))

	if (index === -1) {
		return res.status(404).json({ message: 'book not found' })
	}
	if (!updatedbook || Object.keys(updatedbook).length === 0) {
		return res.status(400).json({ message: 'You must provide a new book' })
	}
	books[index] = { ...books[index], ...updatedbook }

	res.json({ message: 'book updated successfully', book: books[index] })
})
app.delete('/book/:id', (req, res) => {
	const { id } = req.params
	const index = books.findIndex(book => book.id === Number(id))

	if (index === -1) {
		return res.status(404).json({ message: 'book not found' })
	}
	const deletedbook = books[index]
	books.splice(index, 1)
	res.json({ message: 'book deleted successfully', book: deletedbook })
})

app.listen(port, () => {
	console.log('working on port: ', port)
})
