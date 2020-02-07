import React, { useState, useMemo, useEffect } from "react";
import { Input, Button, List } from "antd";

const getAverage = numbers => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  var pattern = /\s/g; // 공백 포함 체크 정규식

  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = e => {
    if (number.match(pattern) || isNaN(number)) {
      alert("내용에 공백이 포함되어 있거나 숫자가 아닙니다!");
      setNumber("");
    } else if (!isNaN(number)) {
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
    }
  };

  const handleKeyDown = e => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <Input
        placeholder="숫자를 입력해주세요..."
        value={number}
        onChange={onChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={onInsert}>등록</Button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균 값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
