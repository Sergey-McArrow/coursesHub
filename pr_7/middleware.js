import jwt from 'jsonwebtoken'
import { config } from 'dotenv'
config()

export const verifyUserRole = (req, res, next) => {
	const auth = req.headers.authorization
	if (!auth) {
		res.status(401).json({ message: 'No token provided' })
	}
	try {
		req.user = jwt.verify(auth, process.env.JWT_SECRET)
		next()
	} catch (error) {
		console.log(error)
		res.status(401).json({ message: 'Unauthorized' })
	}
}
