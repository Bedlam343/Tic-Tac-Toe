"use client";
import React from "react";

type CellTextPropType = {
  children: string;
};
const CellText = ({ children }: CellTextPropType) => {
  return <p className="text-3xl">{children}</p>;
};

type PropTypes = {
  grid: string[];
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
          <CellText>{grid[0]}</CellText>
        </div>
        <div
          onClick={() => onCellClick(1)}
          className="h-[100px] z-10 flex items-center justify-center border-r-2 border-b-2 border-gray-600"
        >
          <CellText>{grid[1]}</CellText>
        </div>
        <div
          onClick={() => onCellClick(2)}
          className="h-[100px] z-10 flex items-center justify-center border-b-2 border-gray-600"
        >
          <CellText>{grid[2]}</CellText>
        </div>
        <div
          onClick={() => onCellClick(3)}
          className="h-[100px] z-10 flex items-center justify-center border-b-2 border-r-2 border-gray-600"
        >
          <CellText>{grid[3]}</CellText>
        </div>
        <div
          onClick={() => onCellClick(4)}
          className="h-[100px] z-10 flex items-center justify-center border-r-2 border-b-2 border-gray-600"
        >
          <CellText>{grid[4]}</CellText>
        </div>
        <div
          onClick={() => onCellClick(5)}
          className="h-[100px] z-10 flex items-center justify-center border-b-2 border-gray-600"
        >
          <CellText>{grid[5]}</CellText>
        </div>
        <div
          onClick={() => onCellClick(6)}
          className="h-[100px] z-10 flex items-center justify-center border-r-2 border-gray-600"
        >
          <CellText>{grid[6]}</CellText>
        </div>
        <div
          onClick={() => onCellClick(7)}
          className="h-[100px] z-10 flex items-center justify-center border-r-2 border-gray-600"
        >
          <CellText>{grid[7]}</CellText>
        </div>
        <div
          onClick={() => onCellClick(8)}
          className="h-[100px] z-10 flex items-center justify-center"
        >
          <CellText>{grid[8]}</CellText>
        </div>
      </div>
    </div>
  );
};

export default Grid;
