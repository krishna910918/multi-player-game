import React from 'react';

interface Props {
  grid: { [key: string]: string | null };
  onCellClick: (position: string, character: string) => void;
}

const Grid: React.FC<Props> = ({ grid, onCellClick }) => {
  const renderCell = (position: string) => {
    const content = grid[position] || '';
    return (
      <div
        key={position}
        className="grid-cell"
        onClick={() => content === '' && onCellClick(position, prompt('Enter a Unicode character') || '')}
      >
        {content}
      </div>
    );
  };

  const cells = [];
  for (let i = 0; i < 100; i++) {
    cells.push(renderCell(i.toString()));
  }

  return <div className="grid-container">{cells}</div>;
};

export default Grid;
