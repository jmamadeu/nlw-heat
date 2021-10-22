import 'dotenv/config';

import express, { response } from 'express';
import cors from 'cors';
import http from 'http';

import { router } from './routes';
import { Server } from '../../../node_modules/socket.io/dist';

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const httpServer = http.createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

io.on('connection', (socket) => {
  console.log('new connection', socket.id, 'teste');
});

export { httpServer, io };
