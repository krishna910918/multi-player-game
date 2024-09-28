import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { handleSockets } from './socket';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

app.use(cors());

// Health check endpoint
app.get('/', (req, res) => {
  res.send('Multiplayer grid server is running!');
});

// Handle WebSocket connections
handleSockets(io);

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
