import React, { useState, useEffect } from "react";
import { Typography, notification, Button } from "antd";
import "./Counter.css";

const { Title } = Typography;

function Counter() {
  const [value, setValue] = useState(0);

  const decreaseValue = () => {
    if (value == 0) {
      openNotification();
    } else {
      setValue(value - 1);
    }
  };

  const openNotification = () => {
    notification.open({
      message: "0 이하로는 할 수 없습니다.",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };

  // useEffect(() => {});

  return (
    <div className="pos">
      <Title>
        현재 카운터 값은 <b>{value}</b> 입니다.
      </Title>
      <Button onClick={() => setValue(value + 1)}>+1</Button>
      <Button onClick={decreaseValue}>-1</Button>
    </div>
  );
}

export default Counter;
