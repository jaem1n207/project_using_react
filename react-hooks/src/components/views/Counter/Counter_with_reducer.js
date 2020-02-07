import React, { useReducer, useEffect } from "react";
import { Button, notification } from "antd";

function reducer(state, action) {
  // action.type에 따라 다른 작업 수행
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때 기존 상태 반환
      return state;
  }
}

const Counter_with_reducer = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  useEffect(() => {
    openNotification();
    return () => {
      closeNotification();
    };
  }, []);

  const openNotification = () => {
    notification.open({
      message: "렌더링이 완료되었습니다!",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };
  const closeNotification = () => {
    notification.open({
      message: "숨겼습니다!",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };

  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b> 입니다.
      </p>
      <Button onClick={() => dispatch({ type: "INCREMENT" })}>+1</Button>
      <Button onClick={() => dispatch({ type: "DECREMENT" })}>-1</Button>
    </div>
  );
};

export default Counter_with_reducer;
