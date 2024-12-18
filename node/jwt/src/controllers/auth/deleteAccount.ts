import { Request, Response } from "express"
import { User } from "../../models/users"

export const deleteAccount = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" })
    }

    const deletedUser = await User.findByIdAndDelete(userId)

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" })
    }

    return res.status(200).json({ message: "Account successfully deleted" })
  } catch (error) {
    console.error("Error deleting account:", error)
    return res.status(500).json({ message: "Internal server error" })
  }
}
