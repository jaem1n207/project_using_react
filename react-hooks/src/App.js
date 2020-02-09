import React, { useState } from "react";
import Counter from "./components/views/Counter/Counter";
import Counter1 from "./components/views/Counter/Counter_with_reducer";
import UserInfo from "./components/views/User/UserInfo";
import UserInfo1 from "./components/views/User/Info_with_reducer";
import ContextSample from "./components/views/Context/ContextSample";
import Average from "./components/views/useMemo/Average";
import Average_useCallback from "./components/views/useCallback/Average_useCallback";
import { Button } from "antd";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </Button>
      <hr />
      {visible && <Average_useCallback />}
    </div>
  );
}

export default App;
