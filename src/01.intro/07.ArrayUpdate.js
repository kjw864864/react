import React, { useState, useRef } from "react";
//배열 이름 클릭시 색상 변경
function User({ user }) {
  const [userItem, setUserItem] = useState(user);
  return (
    <div>
      <b
        style={{ color: userItem.active ? "red" : "green", cursor: "pointer" }}
        onClick={() => {
          const updateUserItem = {
            ...userItem,
            active: !userItem.active
          };
          setUserItem(updateUserItem);
        }}
      >
        {userItem.username}
      </b>
      <span>({userItem.email})</span>
    </div>
  );
}

export default function UserList() {
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

  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}
