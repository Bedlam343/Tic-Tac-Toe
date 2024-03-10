"use client";
import { useState } from "react";
import Grid from "./play-grid";

type playerType = "X" | "O";

const TicTacToe = () => {
  const [play, setPlay] = useState<boolean>(true);
  const [grid, setGrid] = useState<string[]>([]);
  const [player, setPlayer] = useState<playerType>("X");
  const [winner, setWinner] = useState<string>("");

  const checkWinner = (g: string[]) => {
    let win = "";
    if (g[0] && g[0] === g[1] && g[1] === g[2]) {
      win = g[0];
    } else if (g[0] && g[0] === g[3] && g[3] === g[6]) {
      win = g[0];
    } else if (g[0] && g[0] === g[4] && g[4] === g[8]) {
      win = g[0];
    } else if (g[1] && g[1] === g[4] && g[4] === g[7]) {
      win = g[1];
    } else if (g[2] && g[2] === g[4] && g[4] === g[6]) {
      win = g[2];
    } else if (g[2] && g[2] === g[5] && g[5] === g[8]) {
      win = g[2];
    } else if (g[3] && g[3] === g[4] && g[4] === g[5]) {
      win = g[3];
    } else if (g[6] && g[6] === g[7] && g[7] === g[8]) {
      win = g[6];
    }

    if (win) {
      setWinner(win);
      setPlay(false);
    }
  };

  const handleCellClick = (index: number) => {
    if (!play || grid[index]) return;

    const newGrid = [...grid];
    newGrid[index] = player;
    setGrid(newGrid);

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }

    checkWinner(newGrid);
  };

  return (
    <div className="flex items-center justify-center">
      <Grid grid={grid} onCellClick={handleCellClick} />
    </div>
  );
};

export default TicTacToe;
