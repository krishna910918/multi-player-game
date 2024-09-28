export interface GridState {
    [key: string]: string | null; // A key-value map where the key is the grid position (e.g., "1_1") and the value is a Unicode character or null.
  }
  
  // Initialize a 10x10 grid with empty values
  export const initializeGrid = (): GridState => {
    const grid: GridState = {};
    for (let row = 0; row < 10; row++) {
      for (let col = 0; col < 10; col++) {
        grid[`${row}_${col}`] = null; // Initialize each cell with null
      }
    }
    return grid;
  };
  
  // Function to update a specific grid cell
  export const updateGridCell = (grid: GridState, position: string, character: string): boolean => {
    if (!grid[position]) {
      grid[position] = character;
      return true;
    }
    return false; // Return false if the cell is already occupied
  };
  
  // Function to get the current state of the grid
  export const getGridState = (grid: GridState): GridState => {
    return grid;
  };
  