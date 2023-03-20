import React, { useState, useRef } from "react";

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

export default function UserList() {
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

  const nextId = useRef(4);
  const onCreate = () => {
    //유저에 추가
    setUsers([
      ...users,
      {
        id: nextId.current,
        username,
        email
      }
    ]);
    //초기화
    setInputs({
      username: "",
      email: ""
    });
    nextId.current += 1;
  };
  return (
    <>
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}
