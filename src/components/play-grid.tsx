"use client";
type PropTypes = {
  grid: string[];
  onCellClick: (index: number) => void;
};

const Grid = ({ grid, onCellClick }: PropTypes) => {
  return (
    <div style={{ width: "250px", height: "250px" }}>
      <div className="z-10 h-full grid grid-cols-3">
        <div
          onClick={() => onCellClick(0)}
          className="z-10 flex items-center justify-center border-b-2 border-r-2 border-gray-600"
        >
          {grid[0]}
        </div>
        <div
          onClick={() => onCellClick(1)}
          className="z-10 flex items-center justify-center border-r-2 border-b-2 border-gray-600"
        >
          {grid[1]}
        </div>
        <div
          onClick={() => onCellClick(2)}
          className="z-10 flex items-center justify-center border-b-2 border-gray-600"
        >
          {grid[2]}
        </div>
        <div
          onClick={() => onCellClick(3)}
          className="z-10 flex items-center justify-center border-b-2 border-r-2 border-gray-600"
        >
          {grid[3]}
        </div>
        <div
          onClick={() => onCellClick(4)}
          className="z-10 flex items-center justify-center border-r-2 border-b-2 border-gray-600"
        >
          {grid[4]}
        </div>
        <div
          onClick={() => onCellClick(5)}
          className="z-10 flex items-center justify-center border-b-2 border-gray-600"
        >
          {grid[5]}
        </div>
        <div
          onClick={() => onCellClick(6)}
          className="z-10 flex items-center justify-center border-r-2 border-gray-600"
        >
          {grid[6]}
        </div>
        <div
          onClick={() => onCellClick(7)}
          className="z-10 flex items-center justify-center border-r-2 border-gray-600"
        >
          {grid[7]}
        </div>
        <div
          onClick={() => onCellClick(8)}
          className="z-10 flex items-center justify-center"
        >
          {grid[8]}
        </div>
      </div>
    </div>
  );
};

export default Grid;
