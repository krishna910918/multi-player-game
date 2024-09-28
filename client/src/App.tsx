import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import Grid from './Grid';
import PlayerCount from './PlayerCount';
import './styles.css';

const socket = io('http://localhost:4000');

interface GridState {
  [key: string]: string | null;
}

const App: React.FC = () => {
  const [grid, setGrid] = useState<GridState>({});
  const [playerCount, setPlayerCount] = useState<number>(0);

  useEffect(() => {
    socket.on('init', (data) => {
      setGrid(data.grid);
      setPlayerCount(data.players);
    });

    socket.on('gridUpdate', (data) => {
      setGrid((prevGrid) => ({ ...prevGrid, [data.position]: data.character }));
    });

    socket.on('playerCount', (count) => {
      setPlayerCount(count);
    });

    return () => {
      socket.off('init');
      socket.off('gridUpdate');
      socket.off('playerCount');
    };
  }, []);

  const handleCellClick = (position: string, character: string) => {
    socket.emit('updateGrid', { position, character });
  };

  return (
    <div className="app">
      <h1>Multiplayer Grid</h1>
      <PlayerCount count={playerCount} />
      <Grid grid={grid} onCellClick={handleCellClick} />
    </div>
  );
};

export default App;
