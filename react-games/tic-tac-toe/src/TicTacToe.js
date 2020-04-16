import React, { useState } from "react";

function TicTacToe() {
  const [winner, setWinner] = useState("");
  const [turn, setTurn] = useState("0");
  const [tableData, setTableData] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  return (
    <>
      <div>Hello</div>
      {winner && <div>{winner}님의 승리</div>}
    </>
  );
}

export default TicTacToe;
