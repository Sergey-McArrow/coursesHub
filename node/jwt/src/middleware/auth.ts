import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { User } from "../models/users"

const jwtSecret = process.env.SECRET_KEY || "lol"

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string
        email: string
      }
    }
  }
}

export const authJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]
    console.log({ tokenmiddleware: token })

    if (!token) {
      return res.status(401).json({ message: "No token provided" })
    }

    const decoded = jwt.verify(token, jwtSecret) as {
      id: string
      email: string
    }

    const user = await User.findById(decoded.id)
    if (!user) {
      return res.status(401).json({ message: "User not found" })
    }

    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" })
  }
}
