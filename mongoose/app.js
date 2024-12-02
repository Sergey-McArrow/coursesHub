import express from 'express'
import cors from 'cors'
import { config } from 'dotenv'
import { connectToDB } from './db.js'

config()

const port = process.env.PORT || 3333
const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
	res.json({ message: 'Working' })
})

app.listen(port, async () => {
	try {
		await connectToDB()
		await mongoose.connect(process.env.MONGODB_URI)
		console.log('Listen on port: ', port)
	} catch (error) {
		console.error(error.message)
	}
})
