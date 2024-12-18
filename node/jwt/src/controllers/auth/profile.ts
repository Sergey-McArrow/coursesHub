import { Request, Response } from "express"
import { User } from "../../models/users"

const getProfile = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id
    console.log({ userIdProfile: userId })

    if (!userId) {
      return res.status(401).json({ message: "User not authenticated" })
    }

    const user = await User.findById(userId).select("-password")
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    res.status(200).json({
      message: "Profile retrieved successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    console.error("Error fetching profile:", error)
    res.status(500).json({ error: "Internal server error" })
  }
}

export default getProfile
