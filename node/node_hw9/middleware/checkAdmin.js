export const checkAdmin = (req, res, next) => {
  const user = req.user

  if (!user) {
    return res.status(401).json({ message: "Unauthorized" })
  }

  if (!user.isAdmin()) {
    return res
      .status(403)
      .json({ message: "Access denied. Admin role required" })
  }

  next()
}
