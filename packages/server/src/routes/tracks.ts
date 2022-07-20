import express from 'express';
import { songsController } from '../controllers/tracks.controller';

export const tracksRouter = express.Router();

tracksRouter.get('/', songsController);
tracksRouter.get('/image');
tracksRouter.get('/audio');
