type ScorePropsType = {
  xScore: number;
  oScore: number;
};

const Score = ({ xScore, oScore }: ScorePropsType) => {
  return (
    <div>
      <h2 className="text-center text-3xl mt-10">Score</h2>
      <div className="flex items-center justify-center mt-5">
        <div className="flex items-center justify-center">
          <p className="text-2xl">X: {xScore}</p>
        </div>
        <div className="flex items-center justify-center ml-10">
          <p className="text-2xl">O: {oScore}</p>
        </div>
      </div>
    </div>
  );
};

export default Score;
