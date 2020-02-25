import React from "react";

import "./App.css";
import CounterContainer from "./containers/CounterContainer";
import PaletteContainer from "./containers/PaletteContainer";
import WaitingList from "./components/WaitingList";

function App() {
  return (
    <div className="App">
      <PaletteContainer />
      <CounterContainer />
      <WaitingList />
    </div>
  );
}

export default App;
