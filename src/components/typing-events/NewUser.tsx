import React, { useState } from "react";

const NewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newUser = { name, email };
    console.log(newUser);
  };
  return (
    <div>
      <h1>Create New User</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name:{" "}
            <input
              type="text"
              name="name"
              id="name"
              required
              value={name}
              onChange={handleNameChange}
            />
          </label>
        </div>

        <div>
          <label htmlFor="email">
            Email:{" "}
            <input
              type="email"
              name="email"
              id="email"
              required
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default NewUser;
