import express from 'express'
import { config } from 'dotenv'
import cors from 'cors'
import { connectToDB, getDB } from './db.js'
import { ObjectId } from 'mongodb'

config()
const port = process.env.PORT || 1234

const app = express()
app.use(express.json())
app.use(cors())

app.post('/register', async (req, res) => {
	try {
		const db = getDB()
		const user = req.body
		if (!user || Object.keys(user).length === 0) {
			return res.status(400).json({ message: 'You must provide credentials' })
		}
		const result = await db.collection('USERS').insertOne(user)
		res.status(201).json({ message: 'User created succesfully', result })
	} catch (error) {
		console.error(error)
		res.status(400).json({ error: error.message })
	}
})

app.get('/users', async (_req, res) => {
	try {
		const db = getDB()
		const users = await db.collection('USERS').find().toArray()
		res.status(200).json({ users })
	} catch (error) {
		console.error(error)
		res.status(400).json({ error: error.message })
	}
})

app.get('/user/:id', async (req, res) => {
	try {
		const db = getDB()
		const { id } = req.params
		if (!ObjectId.isValid(id)) throw new Error('Invalid ID')
		const user = await db.collection('USERS').findOne({ _id: new ObjectId(id) })
		console.log(user)

		if (!user) throw new Error('User not found')
		res.json({ user })
	} catch (error) {
		console.error(error)
		res.status(400).json({ error: error.message })
	}
})

app.listen(port, async () => {
	try {
		await connectToDB()
		console.log('Listen: ', port)
	} catch (error) {
		console.error(error.message)
	}
})
