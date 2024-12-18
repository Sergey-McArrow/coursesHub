import { Request, Response } from "express"
import { Post } from "../../models/posts"
import jwt from "jsonwebtoken"

export const createPost = async (req: Request, res: Response) => {
  try {
    const cookie = req.cookies
    // const userId = jwt.decode(token);

    // const post = { ...req.body, userId };
    // const newPost = await Post.create(post);
    res.status(201).json({
      message: "Post created",
      //  post: newPost
      cookie,
    })
  } catch (error) {
    console.error("Error creating post:", error)
    res.status(500).json({ error: "Failed to create post" })
  }
}
