import express from 'express';
import { tracksRouter } from './tracks';

export const router = express.Router();

router.use('/tracks', tracksRouter);
