//useEffect를 사용하여 마운트/언마운트/업데이트시 할 작업 설정하기
import React, { useState, useEffect } from "react";

//--첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열
//--마운트 시
//props 로 받은 값을 컴포넌트의 로컬 상태로 설정.
//외부 API 요청 (REST API 등).
//라이브러리 사용 (D3, Video.js 등...).
//setInterval 을 통한 반복작업 혹은 setTimeout 을 통한 작업 예약.
//--언마운트 시(화면에서 사라질때)
//setInterval, setTimeout 을 사용하여 등록한 작업들 clear 하기.
//라이브러리 인스턴스 제거
//--두번째 파라미터
//비어있는 경우 랜더링 될때마다 실행.
//값이 있는 경우 첫 랜더링 될때, 값이 바뀔때 실행.
//빈 배열인 경우 첫 랜더링 될때.

function User({ user, onDelete }) {
  useEffect(() => {
    //마운트 시
    console.log("유저 아이디:" + user.id + ",컴포넌트가 화면에 나타남");
    return () => {
      //언마운트 시
      console.log("유저 아이디:" + user.id + ",컴포넌트가 화면에서 사라짐");
    };
  }, [user]);
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
      <button onClick={() => onDelete(user.id)}>삭제</button>
    </div>
  );
}

export default function UserList() {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com"
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com"
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com"
    }
  ]);

  const onDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} onDelete={onDelete} />
      ))}
    </>
  );
}
