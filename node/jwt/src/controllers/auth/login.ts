import { Request, Response } from "express"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import { User } from "../../models/users"

const jwtSecret = process.env.SECRET_KEY || "lol"

export const login = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({ message: "Invalid creds" })
    }

    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return res.status(400).json({ message: "Invalid creds" })
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      jwtSecret,
      { expiresIn: "1h" }
    )
    const result = await User.updateOne({ email }, { token })
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    })
    res.status(200).json({ token })
  } catch (error) {
    console.error("Error: ", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
