import fs from 'fs/promises';
import type { Request, Response } from 'express';

export const tracksController = async (req: Request, res: Response) => {
  const { path } = req.query;
  if (path === undefined) {
    return res.status(400).json({ message: 'Provide a correct path to the folder' });
  }

  const tracks = await fs.readdir(path as string);

  res.status(200).json(tracks);
};
