"use client";
import React from "react";
import { Cell as CellType } from "@/types/cell";

type CellPropsType = {
  cell: CellType;
};
const Cell = ({ cell }: CellPropsType) => {
  const size = cell?.isWinningCell
    ? "text-6xl text-amber-800"
    : "text-4xl text-white";
  const color = cell?.isWinningCell ? "#393BB2" : "white";
  return (
    <p style={{ color }} className={size}>
      {cell?.value}
    </p>
  );
};

type PropTypes = {
  grid: CellType[];
  onCellClick: (index: number) => void;
};

const Grid = ({ grid, onCellClick }: PropTypes) => {
  return (
    <div className="h-[300px] w-[300px]">
      <div className="z-10 h-full grid grid-cols-3">
        <div
          onClick={() => onCellClick(0)}
          className="h-[100px] z-10 flex items-center justify-center border-b-2 border-r-2 border-gray-600"
        >
          <Cell cell={grid[0]} />
        </div>
        <div
          onClick={() => onCellClick(1)}
          className="h-[100px] z-10 flex items-center justify-center border-r-2 border-b-2 border-gray-600"
        >
          <Cell cell={grid[1]} />
        </div>
        <div
          onClick={() => onCellClick(2)}
          className="h-[100px] z-10 flex items-center justify-center border-b-2 border-gray-600"
        >
          <Cell cell={grid[2]} />
        </div>
        <div
          onClick={() => onCellClick(3)}
          className="h-[100px] z-10 flex items-center justify-center border-b-2 border-r-2 border-gray-600"
        >
          <Cell cell={grid[3]} />
        </div>
        <div
          onClick={() => onCellClick(4)}
          className="h-[100px] z-10 flex items-center justify-center border-r-2 border-b-2 border-gray-600"
        >
          <Cell cell={grid[4]} />
        </div>
        <div
          onClick={() => onCellClick(5)}
          className="h-[100px] z-10 flex items-center justify-center border-b-2 border-gray-600"
        >
          <Cell cell={grid[5]} />
        </div>
        <div
          onClick={() => onCellClick(6)}
          className="h-[100px] z-10 flex items-center justify-center border-r-2 border-gray-600"
        >
          <Cell cell={grid[6]} />
        </div>
        <div
          onClick={() => onCellClick(7)}
          className="h-[100px] z-10 flex items-center justify-center border-r-2 border-gray-600"
        >
          <Cell cell={grid[7]} />
        </div>
        <div
          onClick={() => onCellClick(8)}
          className="h-[100px] z-10 flex items-center justify-center"
        >
          <Cell cell={grid[8]} />
        </div>
      </div>
    </div>
  );
};

export default Grid;
