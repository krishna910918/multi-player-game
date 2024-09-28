"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleSockets = void 0;
const grid_1 = require("./grid");
// Initialize the grid using the `initializeGrid` function from the grid module
let gridState = (0, grid_1.initializeGrid)();
const handleSockets = (io) => {
    io.on('connection', (socket) => {
        console.log('New player connected:', socket.id);
        // Send initial grid state to the newly connected client
        socket.emit('init', { grid: (0, grid_1.getGridState)(gridState), players: io.engine.clientsCount });
        // Broadcast updated player count to all clients
        io.emit('playerCount', io.engine.clientsCount);
        // Handle grid updates from a client
        socket.on('updateGrid', (data) => {
            const { position, character } = data;
            // Update the grid using the `updateGridCell` function from the grid module
            if ((0, grid_1.updateGridCell)(gridState, position, character)) {
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
exports.handleSockets = handleSockets;
