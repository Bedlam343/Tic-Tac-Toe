import { playerType } from "@/types/player";

type ScorePropsType = {
  xScore: number;
  oScore: number;
  active: playerType | "";
};

const Score = ({ xScore, oScore, active }: ScorePropsType) => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-10">Score</h2>
      <div className="flex items-center justify-center mt-5">
        <div className="flex items-center justify-center">
          <p className="text-2xl">
            <span
              className={`${
                active === "X"
                  ? "underline underline-offset-4 decoration-[#E2CBFF]"
                  : ""
              }`}
            >
              X
            </span>
            : {xScore}
          </p>
        </div>
        <div className="flex items-center justify-center ml-10">
          <p className="text-2xl">
            <span
              className={`${
                active === "O" ? "underline underline-offset-4" : ""
              }`}
            >
              O
            </span>
            : {oScore}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Score;
