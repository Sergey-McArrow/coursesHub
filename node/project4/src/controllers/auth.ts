import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";
import { ApiResponse } from "../types/common";
import { LoginBody, RegisterBody } from "../types/auth";

const JWT_SECRET_KEY = process.env.SECRET_KEY || "lol";

async function register(
  req: Request<{}, {}, RegisterBody>,
  res: Response<ApiResponse>
): Promise<void> {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      res
        .status(400)
        .json({ success: false, message: "All fileds are required!" });

      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({ name, email, password: hashedPassword });

    res
      .status(201)
      .json({ success: true, message: "User registred successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

async function login(
  req: Request<{}, {}, LoginBody>,
  res: Response<ApiResponse>
) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res
        .status(400)
        .json({ success: false, message: "Email and password are required!" });
      return;
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ success: false, message: "User not found." });
      return;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({ success: false, message: "Invalid credentials." });
      return;
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({ success: true, message: "Login successful.", data: { token } });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

export { register, login };
