import { useState } from "react";
import "./App.css";

function App() {
  let count = 0;
  const [counter, setCounter] = useState<number>(0);

  const decrease = () => {
    setCounter((counter) => counter - 1);
  };

  const increase = () => {
    setCounter((counter) => counter + 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <main>
      <div className="container">
        <h1>counter</h1>
        <span
          id="value"
          style={{
            color: counter === 0 ? "#222" : counter > 0 ? "green" : "red",
          }}
        >
          {counter}
        </span>
        <div className="button-container">
          <button className="btn decrease" onClick={decrease}>
            decrease
          </button>
          <button className="btn reset" onClick={reset}>
            reset
          </button>
          <button className="btn increase" onClick={increase}>
            increase
          </button>
        </div>
      </div>
    </main>
  );
}

export default App;
