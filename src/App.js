import { useState } from "react";
import "./styles.css";

Increments.defaultProps = {
  step: 1
};

function Increments(props) {
  const [counter, setCount] = useState(0);

  const handleClick = () => setCount(counter + props.step);
  return (
    <div className={"container"}>
      <div>{counter}</div>
      <button onClick={handleClick}>INCREASE</button>
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <Increments />
      <Increments step={2} />
      <Increments step={4} />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
