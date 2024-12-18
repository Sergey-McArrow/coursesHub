import express from "express"
import { User } from "../models/User.js"
import bcrypt from "bcrypt"

const router = express.Router()

router.post("/register", async (req, res) => {
  try {
    const { email, password, role = "user" } = req.body

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" })
    }

    if (role && !["user", "admin"].includes(role)) {
      return res.status(400).json({
        message: "Invalid role. Must be either 'user' or 'admin'",
      })
    }

    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists" })
    }

    const user = await User.create({
      email,
      password,
      role,
      mustChangePassword: true,
    })

    const userResponse = { ...user.toJSON() }
    delete userResponse.password

    res.status(201).json({
      message: "User registered successfully",
      user: userResponse,
    })
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({ message: "Invalid email format" })
    }
    console.error("Registration error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

router.post("/change-password", async (req, res) => {
  try {
    const { userId, currentPassword, newPassword } = req.body

    if (!userId || !currentPassword || !newPassword) {
      return res.status(400).json({
        message: "User ID, current password and new password are required",
      })
    }

    const user = await User.findByPk(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const isValidPassword = await user.verifyPassword(currentPassword)
    if (!isValidPassword) {
      return res.status(401).json({ message: "Current password is incorrect" })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(newPassword, salt)

    await user.update({
      password: hashedPassword,
      mustChangePassword: false,
    })

    res.json({ message: "Password changed successfully" })
  } catch (error) {
    console.error("Password change error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

router.post("/change-email", async (req, res) => {
  try {
    const { userId, currentPassword, newEmail } = req.body

    if (!userId || !currentPassword || !newEmail) {
      return res.status(400).json({
        message: "User ID, current password and new email are required",
      })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(newEmail)) {
      return res.status(400).json({ message: "Invalid email format" })
    }

    const existingEmail = await User.findOne({ where: { email: newEmail } })
    if (existingEmail) {
      return res.status(400).json({ message: "Email already in use" })
    }

    const user = await User.findByPk(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const isValidPassword = await user.verifyPassword(currentPassword)
    if (!isValidPassword) {
      return res.status(401).json({ message: "Current password is incorrect" })
    }

    await user.update({ email: newEmail })

    res.json({
      message: "Email changed successfully",
      newEmail,
    })
  } catch (error) {
    console.error("Email change error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

router.post("/delete-account", async (req, res) => {
  try {
    const { userId, password } = req.body

    if (!userId || !password) {
      return res.status(400).json({
        message: "User ID and password are required",
      })
    }

    const user = await User.findByPk(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    const isValidPassword = await user.verifyPassword(password)
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" })
    }

    await user.destroy()
    res.json({ message: "Account deleted successfully" })
  } catch (error) {
    console.error("Account deletion error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

router.get("/admin", async (req, res) => {
  try {
    const userId = req.query.userId

    if (!userId) {
      return res.status(400).json({ message: "User ID is required" })
    }

    const user = await User.findByPk(userId)
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    if (!user.isAdmin()) {
      return res
        .status(403)
        .json({ message: "Access denied. Admin role required" })
    }

    const allUsers = await User.findAll({
      attributes: { exclude: ["password"] },
    })

    res.json({
      message: "Admin access granted",
      users: allUsers,
    })
  } catch (error) {
    console.error("Admin route error:", error)
    res.status(500).json({ message: "Internal server error" })
  }
})

export default router
