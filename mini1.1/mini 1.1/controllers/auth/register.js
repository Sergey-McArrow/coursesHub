import bcrypt from "bcrypt";
import { User } from "../../models/users.js";

async function register(req, res) {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { name, email, password: hashedPassword };
    await User.create(user);

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error("Error occured when registering user", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

export default register;
