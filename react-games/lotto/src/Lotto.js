import React from "react";
import Ball from "./Ball";

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

const Lotto = () => {
  return (
    <>
      <div>당첨 숫자</div>
      <div id="결과창">{}</div>
      <div>보너스!</div>
      {}
    </>
  );
};

export default Lotto;
