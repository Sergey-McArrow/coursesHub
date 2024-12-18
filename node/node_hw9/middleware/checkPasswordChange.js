export const checkPasswordChange = (req, res, next) => {
  const user = req.user
  if (!user) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  if (user.mustChangePassword) {
    return res.status(403).json({
      message: "Password change required",
      requiresPasswordChange: true,
    })
  }

  next()
}
