"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGridState = exports.updateGridCell = exports.initializeGrid = void 0;
// Initialize a 10x10 grid with empty values
const initializeGrid = () => {
    const grid = {};
    for (let row = 0; row < 10; row++) {
        for (let col = 0; col < 10; col++) {
            grid[`${row}_${col}`] = null; // Initialize each cell with null
        }
    }
    return grid;
};
exports.initializeGrid = initializeGrid;
// Function to update a specific grid cell
const updateGridCell = (grid, position, character) => {
    if (!grid[position]) {
        grid[position] = character;
        return true;
    }
    return false; // Return false if the cell is already occupied
};
exports.updateGridCell = updateGridCell;
// Function to get the current state of the grid
const getGridState = (grid) => {
    return grid;
};
exports.getGridState = getGridState;
