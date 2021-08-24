import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

const DUMMY_USERS = [{ id: "1", name: "One", age: 1 }];

function App() {
  const [users, setUsers] = useState(DUMMY_USERS);

  const addUserHandler = (uName, uAge) => {
    setUsers((oldUsers) => {
      return [
        ...oldUsers,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </>
  );
}

export default App;
