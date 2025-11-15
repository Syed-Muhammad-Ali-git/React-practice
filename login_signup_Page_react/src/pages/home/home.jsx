import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import axios from "axios";
import Swal from "sweetalert2";

const Home = () => {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const uName = user?.email.slice(0, user.email.indexOf("@"));

  // api data fetching

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          setApiData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log("Error", err);
          setLoading(false);
        });
    }
  }, [user, navigate]);

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleSendRequest = (name) => {
    Swal.fire({
      title: `Request sent to ${name}`,
      icon: "success",
      draggable: true,
    });
  };

  if (!user) {
    return null; // or a loading spinner
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        {/* Welcome Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Home</h1>
          {user && (
            <p className="text-lg text-gray-600 mb-4">
              Welcome back,{" "}
              <span className="font-semibold text-indigo-600">{uName}</span>!
            </p>
          )}
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Logout
          </button>
        </div>

        {/* Users Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Add Friends
          </h2>
          {loading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              <p className="ml-4 text-gray-600">Loading users...</p>
            </div>
          ) : (
            <div className="space-y-4">
              {apiData.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg transition duration-200"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                    <h3 className="text-lg font-medium text-gray-800">
                      {user.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => handleSendRequest(user.name)}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-4 transition duration-200"
                  >
                    Send Request
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
