import React, { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState("waiting");
  const [message, setMessage] = useState("클릭해서 시작하세요!");
  const [result, setResult] = useState([]);

  const onClickScreen = () => {};

  const renderAverage = () => {};

  return (
    <>
      <div id="screen" className={state} onClick={onClickScreen}>
        {message}
      </div>
      {renderAverage()}
    </>
  );
}

export default App;
