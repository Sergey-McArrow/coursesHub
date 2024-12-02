import { MongoClient, ServerApiVersion } from 'mongodb'
import { config } from 'dotenv'

config()

const client = new MongoClient(process.env.MONGODB_URI, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
})
let dbConnection = null

export const connectToDB = async () => {
	try {
		await client.connect()
		console.log('You successfully connected to MongoDB!')
		dbConnection = client.db('test')
	} catch (error) {
		console.error('Connection failed', error)
		throw error
	}
}

export const getDB = () => {
	if (!dbConnection) throw new Error('Database not connected')
	return dbConnection
}
