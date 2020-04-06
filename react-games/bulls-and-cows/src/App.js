import React from "react";

function App() {
  return (
    <>
      <h1>{결과}</h1>
      <form onSubmit={onSubmitForm}>
        <input maxLength={4} value={value} onChange={onChange} />
      </form>
      <div>시도: {횟수}</div>
      <ul>{반복문}</ul>
    </>
  );
}

export default App;
