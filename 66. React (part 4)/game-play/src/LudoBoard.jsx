import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });
  let [arr, setArr] = useState(["no moves"]);

  let updateBlue = () => {
    moves.blue++;
    setMoves({ ...moves });

    setArr([...arr, "blue moves"]);
    console.log(arr);
  };

  let updateYellow = () => {
    setMoves({ ...moves, yellow: moves.yellow + 1 });
    setArr([...arr, "yellow movvs"]);
  };

  let updateGreen = () => {
    setMoves((preMoves) => {
      return { ...preMoves, green: preMoves.green + 1 };
    });

    setArr((preArr) => {
      return [...preArr, "green moves"];
    });
  };

  let updateRed = () => {
    setMoves((preMoves) => {
      return { ...preMoves, red: preMoves.red++ };
    });

    setArr((preArr) => {
        return [...preArr, "red moves"];
      });
  };

  return (
    <div>
      <p>Start Game!</p>
      <p>{arr}</p>
      <div className="board">
        <p>Blue Moves = {moves.blue}</p>
        <button style={{ background: "blue" }} onClick={updateBlue}>
          +1
        </button>

        <p>Yellow Moves = {moves.yellow}</p>
        <button
          style={{ background: "yellow", color: "black" }}
          onClick={updateYellow}
        >
          +1
        </button>

        <p>Green Moves = {moves.green}</p>
        <button style={{ background: "green" }} onClick={updateGreen}>
          +1
        </button>

        <p>Red Moves = {moves.red}</p>
        <button style={{ background: "red" }} onClick={updateRed}>
          +1
        </button>
      </div>
    </div>
  );
}
