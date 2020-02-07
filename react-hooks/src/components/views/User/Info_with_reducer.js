import React, { useReducer, useEffect } from "react";
import { Input, notification } from "antd";
import "../../../Style/antdesign.css";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

function UserInfo() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });
  const { name, nickname } = state;
  const onChange = e => {
    dispatch(e.target);
  };

  /* 언마운트 되기 전이나, 업데잍트 되기 직전에 다음 작업 수행 */
  useEffect(() => {
    openNotification();

    return () => {
      closeNotification();
    };
  }, []);

  /* 마운트 될 때만 실행 */
  // useEffect(() => {
  //   openNotification();
  // }, []);

  /* 특정 값이 업뎃되었을 때 */
  // useEffect(() => {
  //   console.log(name);
  // }, [name]);

  /* 업뎃될 때마다 실행 */
  // useEffect(() => {
  //   console.log({
  //     name,
  //     nickname
  //   });
  // });

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
      message: "숨겨졌습니다.",
      onClick: () => {
        console.log("Notification Clicked!");
      }
    });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Input
          placeholder="이름 입력..."
          name="name"
          style={{ width: "40%" }}
          maxLength={10}
          value={name}
          onChange={onChange}
        />
        <Input
          placeholder="닉네임 입력..."
          name="nickname"
          style={{ width: "40%" }}
          maxLength={30}
          value={nickname}
          onChange={onChange}
        />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임: </b>
          {nickname}
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
