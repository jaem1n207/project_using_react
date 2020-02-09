import React, { useState, useMemo, useCallback } from "react";
import { Input, Button } from "antd";

const getAverage = numbers => {
  console.log("평균값 계산 중..");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average_useCallback = () => {
  var pattern = /\s/g; // 공백 포함 체크 정규식

  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");

  const onChange = useCallback(e => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    e => {
      if (number.match(pattern) || isNaN(number) || number === "") {
        alert("내용에 공백이 포함되어 있거나 숫자가 아닙니다!");
        setNumber("");
      } else if (!isNaN(number)) {
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
      }
    },
    [number, list]
  );

  const onKeyPress = e => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <Input value={number} onChange={onChange} onKeyDown={onKeyPress}></Input>
      <Button onClick={onInsert}>등록</Button>
      <ul>
        {list.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average_useCallback;
