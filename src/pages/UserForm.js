import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../api";  
import ThemeToggle from "../components/ThemeToggle";
import Img from './welcome.jpg';

function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [warningMessage, setWarningMessage] = useState("");
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !phone) {
      setWarningMessage("Please fill in all fields!");
      return;
    }

    const newUser = { name, email, phone };

    try {
      const createdUser = await addUser(newUser);
      setUsers([...users, createdUser]); 
      alert("User successfully created!");
      navigate("/");
    } catch (error) {
      alert("Failed to create user. Please try again.");
    }
  };

  return (
    <div className="flex flex-col justify-start items-center min-h-screen bg-animated-gradient dark:bg-animated-gradient transition-all duration-1000 ease-in-out">
      {/* Header with Back Button and Theme Toggle */}
      <div className="flex justify-between items-center w-full p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="mt-4 bg-gradient-to-r from-green-400 to-teal-500 text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:ring-offset-2"
        >
          Back
        </button>
        
        {/* Theme Toggle */}
        <ThemeToggle />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <img src={Img} className="mx-auto" width={300} />
        <h2 className="text-2xl text-center text-dark font-semibold">Create New User</h2>

        {/* Display the warning message if any field is missing */}
        {warningMessage && (
          <div className="text-red-500 text-center font-medium mb-4">
            {warningMessage}
          </div>
        )}

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500" />

        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Add User
        </button>
      </form>
    </div>
  );
}

export default UserForm;
