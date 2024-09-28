import { Server } from 'socket.io';
import { initializeGrid, updateGridCell, getGridState, GridState } from './grid';

// Initialize the grid using the `initializeGrid` function from the grid module
let gridState: GridState = initializeGrid();

export const handleSockets = (io: Server) => {
  io.on('connection', (socket) => {
    console.log('New player connected:', socket.id);

    // Send initial grid state to the newly connected client
    socket.emit('init', { grid: getGridState(gridState), players: io.engine.clientsCount });

    // Broadcast updated player count to all clients
    io.emit('playerCount', io.engine.clientsCount);

    // Handle grid updates from a client
    socket.on('updateGrid', (data: { position: string; character: string }) => {
      const { position, character } = data;

      // Update the grid using the `updateGridCell` function from the grid module
      if (updateGridCell(gridState, position, character)) {
        io.emit('gridUpdate', { position, character });
      }
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      io.emit('playerCount', io.engine.clientsCount - 1);
      console.log('Player disconnected:', socket.id);
    });
  });
};
