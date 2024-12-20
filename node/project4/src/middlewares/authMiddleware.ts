import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ApiResponse } from '../types/common';

const JWT_SECRET_KEY = process.env.SECRET_KEY || 'lol';

interface JwtPayload {
  id: string;
}

export function authMiddleware(
  req: Request & { user?: string },
  res: Response<ApiResponse>,
  next: NextFunction
): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res
      .status(401)
      .json({ success: false, message: 'Authorization token is required.' });
    return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY) as JwtPayload;
    req.user = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid token' });
  }
}
