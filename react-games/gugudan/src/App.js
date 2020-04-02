import React, { useState, useRef, useEffect } from "react";

function App() {
  const [value, setValue] = useState("");
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [result, setResult] = useState("");
  const inputEl = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult("정답: " + value);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
      inputEl.current.focus();
    } else {
      setResult("땡");
      setValue("");
      inputEl.current.focus();
    }
  };

  const onChange = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}은(는)?
      </div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} type="number" value={value} onChange={onChange} />
        <button>입력</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default App;
