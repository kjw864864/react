import React, { useState, useRef } from "react";
//배열 삭제
function User({ user, onDelete }) {
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
