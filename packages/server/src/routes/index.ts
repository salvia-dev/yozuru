import express from 'express';
import { songsRouter } from './songs';

export const router = express.Router();

router.use('/songs', songsRouter);
