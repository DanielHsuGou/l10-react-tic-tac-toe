import "./App.css";
import Square from "./components/square";
import { useState } from "react";

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));

  function declareWinner() {
    const combo = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combo.length; i++) {
      const [x, y, z] = combo[i];
      // someone wins
      if (
        squares[x] && // check if position x is empty string => false if empty
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x]; // "X" / "O"
      }
    }
    return null;
  }

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
  }

  function onSquareClick(i) {
    // empty string = true OR winner is not null = true => return
    if (squares[i] || winner) return;
    // set array state
    // square[i] = "O" cannot be execute due to it's state
    // copy same array to new array
    const newSquares = squares.slice();
    if (xIsNext) {
      newSquares[i] = "X";
    } else {
      newSquares[i] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(newSquares);
  }

  const winner = declareWinner(); // "X" or "O" or "null"
  return (
    <div className="App">
      <div className="grid-container">
        {/* {
          // [0,0,0,0,0,0,0,0,0]
          // for loop by a dummy array with map
          // "return" is necessary
          Array(9)
            .fill(0)
            .map((e, i) => {
              return <Square value={i + 1} key={i} />;
            })
        } */}
        {/* <Square value={squares[0]} handleOnClick={() => onSquareClick(0)} />
        <Square value={squares[1]} handleOnClick={() => onSquareClick(1)} />
        <Square value={squares[2]} handleOnClick={() => onSquareClick(2)} />
        <Square value={squares[3]} handleOnClick={() => onSquareClick(3)} />
        <Square value={squares[4]} handleOnClick={() => onSquareClick(4)} />
        <Square value={squares[5]} handleOnClick={() => onSquareClick(5)} />
        <Square value={squares[6]} handleOnClick={() => onSquareClick(6)} />
        <Square value={squares[7]} handleOnClick={() => onSquareClick(7)} />
        <Square value={squares[8]} handleOnClick={() => onSquareClick(8)} /> */}
        {squares.map((s, i) => {
          return (
            <Square key={i} value={s} handleOnClick={() => onSquareClick(i)} />
          );
        })}
      </div>

      {!!winner && (
        <div style={{ marginTop: "10px" }}>The Winner is {winner}!</div>
      )}

      {!winner &&
        (xIsNext ? (
          <div style={{ marginTop: "10px" }}>Next Move: X</div>
        ) : (
          <div style={{ marginTop: "10px" }}>Next Move: O</div>
        ))}

      <button style={{ marginTop: "10px" }} onClick={() => handleRestart()}>
        Restart
      </button>
    </div>
  );
}

export default App;
