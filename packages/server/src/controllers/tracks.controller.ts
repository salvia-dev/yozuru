import type { Request, Response } from 'express';

export const songsController = async (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello from /api/songs' });
};
