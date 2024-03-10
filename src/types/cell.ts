import { playerType } from "./player";
export type Cell = {
  value: playerType | "";
  index?: number;
  isWinningCell?: boolean;
};
