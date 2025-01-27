import React, { useState } from "react";
import UserList from "../components/UserList";
import ThemeToggle from "../components/ThemeToggle";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  return (
    <div className="container mx-auto px-6 py-12 min-h-screen bg-animated-gradient dark:bg-animated-gradient transition-all duration-1000 ease-in-out">
      <div className="flex justify-between items-center mb-8">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 animate-heading transform transition-transform hover:scale-105">
          User Dashboard Management
        </h1>
        <div>
          <ThemeToggle />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 my-6">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border rounded-xl p-4 text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300 ease-in-out"
        />
        {/* Sort Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border rounded-xl p-4 text-gray-800 dark:text-white dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition-all duration-300 ease-in-out"
        >
          <option value="asc">Sort A - Z</option>
          <option value="desc">Sort Z - A</option>
        </select>
        <Link
          to="/userform"
          className="px-6 py-4 rounded-lg bg-gradient-to-r from-green-400 to-teal-500 text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add User
        </Link>
      </div>

      {/* User List */}
      <UserList searchQuery={searchQuery} sortOrder={sortOrder} />
    </div>
  );
};

export default HomePage;
