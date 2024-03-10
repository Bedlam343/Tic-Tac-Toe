"use client";
import { useState } from "react";
import Grid from "./play-grid";
import { playerType } from "@/types/player";
import { Cell as CellType } from "@/types/cell";

const TicTacToe = () => {
  const [play, setPlay] = useState<boolean>(true);
  const [grid, setGrid] = useState<CellType[]>([]);
  const [player, setPlayer] = useState<playerType>("X");

  const restart = () => {
    setPlay(true);
    setGrid([]);
    setPlayer("X");
  };

  const checkWinner = (g: CellType[]) => {
    const winningCells = [];
    if (
      g[0]?.value &&
      g[0]?.value === g[1]?.value &&
      g[1]?.value === g[2]?.value
    ) {
      winningCells.push(0, 1, 2);
    } else if (
      g[0]?.value &&
      g[0]?.value === g[3]?.value &&
      g[3]?.value === g[6]?.value
    ) {
      winningCells.push(0, 3, 6);
    } else if (
      g[0]?.value &&
      g[0]?.value === g[4]?.value &&
      g[4]?.value === g[8]?.value
    ) {
      winningCells.push(0, 4, 8);
    } else if (
      g[1]?.value &&
      g[1]?.value === g[4]?.value &&
      g[4]?.value === g[7]?.value
    ) {
      winningCells.push(1, 4, 7);
    } else if (
      g[2]?.value &&
      g[2]?.value === g[4]?.value &&
      g[4]?.value === g[6]?.value
    ) {
      winningCells.push(2, 4, 6);
    } else if (
      g[2]?.value &&
      g[2]?.value === g[5]?.value &&
      g[5]?.value === g[8]?.value
    ) {
      winningCells.push(2, 5, 8);
    } else if (
      g[3]?.value &&
      g[3]?.value === g[4]?.value &&
      g[4]?.value === g[5]?.value
    ) {
      winningCells.push(3, 4, 5);
    } else if (
      g[6]?.value &&
      g[6]?.value === g[7]?.value &&
      g[7]?.value === g[8]?.value
    ) {
      winningCells.push(6, 7, 8);
    }

    if (winningCells.length > 0) {
      const newGrid = [...g];
      winningCells.forEach((index) => {
        newGrid[index].isWinningCell = true;
      });
      setGrid(newGrid);
      setPlay(false);
    }
  };

  const handleCellClick = (index: number) => {
    if (!play || grid[index]) return;

    const newGrid = [...grid];
    newGrid[index] = { value: player, isWinningCell: false };
    setGrid(newGrid);

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }

    checkWinner(newGrid);
  };

  return (
    <div className="pt-10">
      <h1 className="text-center text-5xl">
        TIC<span style={{ color: "#393BB2" }}>-</span>TAC
        <span style={{ color: "#393BB2" }}>-</span>TOE
      </h1>

      <div
        style={{ position: "absolute", top: "20%" }}
        className="w-[100%] flex items-center justify-center"
      >
        <Grid grid={grid} onCellClick={handleCellClick} />
      </div>

      {!play && (
        <div
          style={{ position: "absolute", top: "70%" }}
          className="flex items-center justify-center w-[100%]"
        >
          <button
            onClick={restart}
            className="z-10 cursor-pointer relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              New Game
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TicTacToe;
