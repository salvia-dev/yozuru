import express from 'express';
import { tracksController } from '../controllers/tracks.controller';

export const tracksRouter = express.Router();

tracksRouter.get('/', tracksController);
tracksRouter.get('/image');
tracksRouter.get('/audio');
