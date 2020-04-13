import React from "react";

function getWinNumbers() {
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (RTCIceCandidate.length > 0) {
    shuffle.push(
      candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]
    );
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.splice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

function App() {
  return (
    <>
      <div></div>
    </>
  );
}

export default App;
