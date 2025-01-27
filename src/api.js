import axios from "axios";

// Mock API URL (for demonstration purposes)
const API_URL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch users.");
  }
};

// Add a new user (Mock behavior: just return the user data)
export const addUser = async (newUser) => {
  try {
    return newUser;
  } catch (error) {
    throw new Error("Failed to add user.");
  }
};

// Update user
export const updateUser = async (id, updatedUser) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, {
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      email: updatedUser.email,
      designation: updatedUser.designation,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to update user.");
  }
};

// Delete user (Mock function, no actual API call)
export const deleteUser = async (id) => {
  try {
    // Simulating a DELETE request to remove the user (no actual request)
    return true; // This represents a successful deletion
  } catch (error) {
    throw new Error("Failed to delete user.");
  }
};
