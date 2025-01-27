import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center text-lg text-blue-600 animate-pulse">
        Loading user details...
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500 font-bold">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-animated-gradient text-white">
      <div className="container mx-auto p-6">
            <button
              onClick={() => navigate("/")}
              className="bg-gradient-to-r from-green-400 to-teal-500 text-white px-6 py-3 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:from-teal-500 hover:to-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
              Go Back
            </button>


        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-4xl mx-auto">
          <div className="flex items-center gap-8">
            <img
              src={`https://robohash.org/${user.id}?set=set4&size=200x200`}
              alt="User Avatar"
              className="w-32 h-32 rounded-full object-cover border-4 border-indigo-600"
            />
            <div>
              <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
                {user.name}
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-4">
                {user.company.name}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Email:</strong> {user.email}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Phone:</strong> {user.phone}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                <strong>Website:</strong>
                <a
                  href={`http://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {user.website}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;
