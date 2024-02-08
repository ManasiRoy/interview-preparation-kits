import React, { useState } from "react";

export default function App() {
  const [counter, setCounter] = useState(0);

  const counterFun = () => {
    setCounter(counter + 1);
  };
  const seccounterFun = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="App">
      {counter}
      <button onClick={counterFun}> one </button>
      <button onClick={seccounterFun}> two </button>
    </div>
  );
}
