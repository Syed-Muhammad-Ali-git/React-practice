import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const UsersScreen = () => {
  const [usersList, setUsersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const viewUser = (userData) => {
    console.log(userData);
    navigate(`/user/${userData?.id}`);
  };

  useEffect(() => {
    const apiCall = async () => {
      setLoading(true);
      const apiUrl = "https://jsonplaceholder.typicode.com/users";

      try {
        const res = await axios.get(apiUrl);

        if (res) {
          setUsersList(res?.data);
          setLoading(false);
        }
      } catch (err) {
        console.log("There is an error", err);
      }
    };
    apiCall();
  }, []);

  return (
    <>
      <h1>users api call</h1>
      {loading && <h3>Data is Loading...</h3>}

      <ul>
        {usersList.map((item) => {
          return (
            <li key={item.id}>
              {item.name}{" "}
              <button
                onClick={() => {
                  viewUser(item);
                }}
              >
                View
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UsersScreen;
