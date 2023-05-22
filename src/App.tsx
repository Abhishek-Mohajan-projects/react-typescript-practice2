import React, { useState } from "react";
import "./App.css";
import NewUser from "./components/typing-events/NewUser";

type User = {
  id: number;
  name: string;
};

function App() {
  const [user, setUser] = useState<User>({} as User);

  const handleAddUser = () => {
    setUser({ id: 1, name: "alex" });
  };
  return (
    <div className="App">
      <h1>App</h1>

      <button onClick={handleAddUser}>Add User</button>
      <p>{user.name}</p>

      <hr />
      <hr />

      <NewUser />
    </div>
  );
}

export default App;
