import React, { useState, useEffect } from "react";
import { Input, notification } from "antd";
import "../../../Style/antdesign.css";

function UserInfo() {
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");

  /* 언마운트 되기 전이나, 업데잍트 되기 직전에 다음 작업 수행 */
  useEffect(() => {
    openNotification();

    return () => {
      console.log("cleanup");
      console.log(name);
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

  /* 업뎃될 때 */
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

  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <Input
          style={{ width: "40%" }}
          maxLength={10}
          value={name}
          onChange={onChangeName}
        />
        <Input
          style={{ width: "40%" }}
          maxLength={10}
          value={nickname}
          onChange={onChangeNickname}
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
