import React, { useState, useCallback } from "react";

//성능 최적화

//useCallback,React.memo
//특정 함수를 새로 만들지 않고 재사용하고 싶을때 사용
//함수 안에서 사용하는 상태 혹은 props 가 있다면 꼭, deps 배열안에 포함
//컴포넌트 렌더링 최적화 작업시 주로 사용

const CreateUser = React.memo(function CreateUser({
  username,
  email,
  onChange
}) {
  console.log("CreateUser");
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        value={username}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
      />
    </div>
  );
});

const User = React.memo(function User({ user, onToggle }) {
  console.log("User");
  return (
    <div>
      <b
        style={{
          color: user.active ? "red" : "green",
          cursor: "pointer"
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      ({user.email})
    </div>
  );
});

function UserList({ users, onToggle }) {
  return (
    <>
      {users.map((user) => (
        <User user={user} />
      ))}
    </>
  );
}

export default function UseCallback() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  });
  const { username, email } = inputs;

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

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} />
      <UserList users={users} onToggle={onToggle} />
    </>
  );
}
