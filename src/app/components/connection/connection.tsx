"use client";

import React, { useState } from "react";

const Connection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle connection logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="connection-form">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col my-5">
          <label className="font-medium" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="border border-blue-400 p-2 rounded-md"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col my-5">
          <div className="flex items-center justify-between">
            <label className="font-medium" htmlFor="password">
              Password:
            </label>
            <a
              href="#"
              className="text-sm font-medium text-[#1D4ED8] hover:underline ml-2"
            >
              Mot de passe oublié
            </a>
          </div>
          <input
            type="password"
            id="password"
            className="border border-blue-400 p-2 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          className=" w-full bg-[#1D4ED8] text-white p-2 rounded-md font-medium"
          type="submit"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Connection;
