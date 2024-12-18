import { Request, Response } from "express"
import { User } from "../../models/users"

export const updateEmail = async (req: Request, res: Response) => {
  try {
    const { newEmail } = req.body
    const userId = req.user?.id
    if (!newEmail) {
      return res.status(400).json({ message: "New email is required" })
    }

    const existingUser = await User.findOne({ email: newEmail })
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" })
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { email: newEmail },
      { new: true }
    )

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({
      message: "Email updated successfully",
      email: updatedUser.email,
    })
  } catch (error) {
    console.error("Error updating email:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}
