import express from 'express'
import { config } from 'dotenv'

config()
const port = process.env.PORT || 1234

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
	res.json({ message: 'Working!' })
})

app.listen(port, () => {
	console.log('Listen: ', port)
})
