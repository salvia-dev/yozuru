import express from 'express';
import { audioController } from '../controllers/songs.controller';

export const songsRouter = express.Router();

songsRouter.get('/', audioController);
