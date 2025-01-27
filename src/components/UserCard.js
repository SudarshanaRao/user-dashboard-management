import React, { useState } from "react";

const UserCard = ({ user }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  if (!user) {
    return <p>User not found</p>;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setEditedUser(user); // Reset to original user details
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'address.city') {
      setEditedUser((prevUser) => ({
        ...prevUser,
        address: {
          ...prevUser.address,
          city: value, // Update city inside address
        },
      }));
    } else {
      setEditedUser((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send POST request with the edited user data
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedUser),
    });

    if (response.ok) {
      const updatedUser = await response.json(); 
      setEditedUser(updatedUser); 
      setIsEditing(false); 
      alert("User details updated successfully");
    } else {
      alert("Failed to update user details");
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105">
      <img
        src={`https://robohash.org/${user.id}?set=set4&size=200x200`}
        alt="User Avatar"
        className="rounded-full w-24 h-24 mx-auto mb-4"
      />
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Edit User Details
          </h3>
          <div className="mt-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={editedUser.name}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 rounded-md border border-gray-300 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={editedUser.email}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 rounded-md border border-gray-300 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="mt-4">
            <label htmlFor="city" className="block text-gray-700 dark:text-gray-300 font-bold">
              City
            </label>
            <input
              type="text"
              id="city"
              name="address.city"
              value={editedUser.address.city}
              onChange={handleInputChange}
              className="w-full mt-2 p-2 rounded-md border border-gray-300 dark:border-gray-700 font-bold text-gray-700 dark:text-gray-300"
            />
          </div>
          <div className="flex justify-between mt-6">
            <button
              type="button"
              onClick={handleCancelClick}
              className="bg-gray-500 text-white py-2 px-6 rounded-full hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-green-400 to-teal-500 text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-400 py-2 px-6 rounded-full shadow-lg"
            >
              Save Changes
            </button>
          </div>
        </form>
      ) : (
        <>
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{editedUser.name}</h3>
          <p className="text-gray-700 dark:text-gray-300 font-bold">Email: {editedUser.email}</p>
          <p className="text-gray-700 dark:text-gray-300 font-bold">City: {editedUser.address.city}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={handleEditClick}
              className="mt-4 bg-gradient-to-r from-green-400 to-teal-500 text-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 focus:ring-offset-2"
            >
              Edit
            </button>
            <button
              className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-indigo-600 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UserCard;
