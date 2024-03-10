"use client";
import { useState } from "react";
import Grid from "./play-grid";
import { playerType } from "@/types/player";
import { Cell as CellType } from "@/types/cell";
import Score from "@/components/Score";
import NewGameButtom from "@/components/NewGameButton";

type winCounterType = {
  X: number;
  O: number;
};

const TicTacToe = () => {
  const [play, setPlay] = useState<boolean>(true);
  const [grid, setGrid] = useState<CellType[]>([]);
  const [player, setPlayer] = useState<playerType>("X");
  const [winCounter, setWinCounter] = useState<winCounterType>({
    X: 0,
    O: 0,
  });

  const restart = () => {
    setPlay(true);
    setGrid([]);
    setPlayer("X");
  };

  const checkWinner = (g: CellType[]) => {
    const winningCells = [];
    let winnerPlayer = "";
    if (
      g[0]?.value &&
      g[0]?.value === g[1]?.value &&
      g[1]?.value === g[2]?.value
    ) {
      winningCells.push(0, 1, 2);
      winnerPlayer = g[0].value;
    } else if (
      g[0]?.value &&
      g[0]?.value === g[3]?.value &&
      g[3]?.value === g[6]?.value
    ) {
      winningCells.push(0, 3, 6);
      winnerPlayer = g[0].value;
    } else if (
      g[0]?.value &&
      g[0]?.value === g[4]?.value &&
      g[4]?.value === g[8]?.value
    ) {
      winningCells.push(0, 4, 8);
      winnerPlayer = g[0].value;
    } else if (
      g[1]?.value &&
      g[1]?.value === g[4]?.value &&
      g[4]?.value === g[7]?.value
    ) {
      winningCells.push(1, 4, 7);
      winnerPlayer = g[1].value;
    } else if (
      g[2]?.value &&
      g[2]?.value === g[4]?.value &&
      g[4]?.value === g[6]?.value
    ) {
      winningCells.push(2, 4, 6);
      winnerPlayer = g[2].value;
    } else if (
      g[2]?.value &&
      g[2]?.value === g[5]?.value &&
      g[5]?.value === g[8]?.value
    ) {
      winningCells.push(2, 5, 8);
      winnerPlayer = g[2].value;
    } else if (
      g[3]?.value &&
      g[3]?.value === g[4]?.value &&
      g[4]?.value === g[5]?.value
    ) {
      winningCells.push(3, 4, 5);
      winnerPlayer = g[3].value;
    } else if (
      g[6]?.value &&
      g[6]?.value === g[7]?.value &&
      g[7]?.value === g[8]?.value
    ) {
      winningCells.push(6, 7, 8);
      winnerPlayer = g[6].value;
    }

    if (winningCells.length > 0) {
      const newGrid = [...g];
      winningCells.forEach((index) => {
        newGrid[index].isWinningCell = true;
      });
      setGrid(newGrid);
      setPlay(false);
      setWinCounter({
        ...winCounter,
        [winnerPlayer]: winCounter[winnerPlayer as playerType] + 1,
      });
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

      <div
        style={{ position: "absolute", top: "68.5%" }}
        className="flex items-center justify-center w-[100%]"
      >
        <NewGameButtom onClick={restart} disabled={grid.length === 0} />
      </div>

      <div
        className="flex items-center justify-center w-[100%]"
        style={{ position: "absolute", top: "75%" }}
      >
        <Score xScore={winCounter.X} oScore={winCounter.O} />
      </div>
    </div>
  );
};

export default TicTacToe;
