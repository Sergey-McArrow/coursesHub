const sequelize = require('./config/db')
const express = require('express')
const Redis = require('ioredis')
const Visitors = require('./models/visitors')
const cors = require('cors')
require('dotenv/config')

const app = express()
app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3333
const { REDIS_HOST, REDIS_PORT } = process.env

const redis = new Redis({
	host: REDIS_HOST || 'localhost',
	port: REDIS_PORT || 6379,
})

app.get('/', async (_req, res) => {
	try {
		const count = await redis.incr('hits')

		const name = `Visitor #${count}`
		const newUser = await Visitors.create({
			name,
		})
		res.send(
			`Hello! This page has been visited ${count} times.\n
			Current user: ${JSON.stringify(newUser)}
			 `,
		)
	} catch (error) {
		console.error('Error:', error.message)
		res.status(500).send('An error occurred. Check server logs.')
	}
})

app.get('/visitors', async (_req, res) => {
	try {
		const visitors = await Visitors.findAll({})
		res.json(visitors)
	} catch (error) {
		console.error('Error fetching visitors:', error.message)
		res.status(500).send('Failed to fetch visitors.')
	}
})

app.listen(PORT, async () => {
	try {
		sequelize
			.authenticate()
			.then(() => console.log('Connected to MySQL'))
			.catch(err => console.error('Error connecting to MySQL:', err))

		console.log(`App is running at http://localhost:${PORT}`)
	} catch (error) {
		console.error(error)
	}
})
process.on('uncaughtException', err => {
	console.error('Unhandled Exception:', err.message, err.stack)
	process.exit(1) // Exit after handling
})

process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})
