import type { Request, Response } from 'express';

export const audioController = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from /api/songs' });
};
