import express from 'express';
import cors from 'cors';
import { getConfig } from './config';
import { router } from './routes/index';

const PORT = getConfig('PORT');
export const app = express();

app.use(express.json());
app.use('/api', router);
app.use(cors({ origin: 'http://localhost:3000' }));

if (getConfig('NODE_ENV') !== 'testing') {
  const server = app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
  });

  server.on('error', () => console.error);

  const serverShutdown = () => {
    console.log('Closing server gracefully...');

    server.close(() => {
      console.log('Server has been closed');
      process.exit(0);
    });
  };

  process.on('SIGTERM', serverShutdown);
  process.on('SIGINT', serverShutdown);
}
