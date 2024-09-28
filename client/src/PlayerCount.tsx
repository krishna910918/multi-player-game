import React from 'react';

interface Props {
  count: number;
}

const PlayerCount: React.FC<Props> = ({ count }) => {
  return (
    <div className="player-count">
      Players online: {count}
    </div>
  );
};

export default PlayerCount;
