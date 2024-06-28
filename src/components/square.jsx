// import { useState } from "react";

export default function Square({ value, handleOnClick }) {
  // Lifting the state up to App()
  // const [value, setValue] = useState("");

  // Lifting the function up to App() and pass down by props
  // function handleOnClick() {
  // "X or "O"
  // "X" first
  // setValue("X");
  // }

  return (
    <button onClick={handleOnClick} className="square">
      {value}
    </button>
  );
}

// export default function Square(props) {
//   console.log(props); // props = { value: 1 }
//   return <button className="square">{props.value}</button>;
// }

// Component => button
// Props => from App pass to Square
