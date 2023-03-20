import React, { useState, useRef, useMemo } from "react";

//성능 최적화
//useMemo,useCallback,React.memo

//useMemo
//--특정 결과값을 재사용 할 때 사용
//--첫번째 파라미터에는 어떻게 연산할지 정의하는 함수
//--두번째 파라미터 deps 배열
//배열 안에 넣은 내용이 바뀌면, 등록한 함수를 호출해서 값을 연산
//만약에 내용이 바뀌지 않았다면 이전에 연산한 값을 재사용

function countActiveUser(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active === true).length;
}

function User({ user, onToggle }) {
  return (
    <div>
      <b
        style={{ color: user.active ? "red" : "green", cursor: "pointer" }}
        onClick={() => {
          onToggle(user.id);
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
    </div>
  );
}

export default function UserList() {
  const [increaseCnt, setIncreseCnt] = useState(0);
  const onIncrease = () => {
    setIncreseCnt(increaseCnt + 1);
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: false
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false
    }
  ]);

  const onToggle = (id) => {
    setUsers(
      users.map((user) => {
        return id === user.id ? { ...user, active: !user.active } : user;
      })
    );
  };
  const cnt = useMemo(() => countActiveUser(users), [users]);

  return (
    <>
      <button onClick={onIncrease}>+1</button>
      <div>클릭수 : {increaseCnt}</div>
      {users.map((user) => (
        <User user={user} onToggle={onToggle} key={user.id} />
      ))}
      <div>활성사용자 수 : {cnt}</div>
    </>
  );
}
