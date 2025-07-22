"use client";
import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
    let pwd = "";
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  return (
    <div className="p-8 max-w-lg mx-auto text-center">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">Password Generator</h1>
      <div className="mb-4">
        <label className="block mb-2 text-gray-700 font-medium">Length: {length}</label>
        <input
          type="range"
          min="6"
          max="32"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="w-full"
        />
      </div>
      <button
        onClick={generatePassword}
        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
      >
        Generate Password
      </button>
      {password && (
        <div className="mt-6 bg-gray-100 text-blue-700 p-4 rounded-md break-words font-mono">
          {password}
        </div>
      )}
    </div>
  );
}
