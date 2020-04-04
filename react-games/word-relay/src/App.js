import React, { useState, useRef } from "react";

function App() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [word, setWord] = useState("짱구");
  const inputEl = useRef(null);

  const onSubmitForm = e => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("정답!");
      setWord(value);
      setValue("");
      inputEl.current.focus();
    } else {
      setResult("땡!");
      setValue("");
      inputEl.current.focus();
    }
  };

  const onChangeValue = e => {
    setValue(e.target.value);
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} value={value} onChange={onChangeValue} />
        <button>클릭</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default App;
