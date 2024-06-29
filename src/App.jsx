import axios from "axios";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import dummyImage from "./assets/person-dummy.jpg";

function App() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  console.log(userData);

  const handleViewClick = (user) => {
    setSelectedUser(user);
  };

  return (
    <>
      <div className="flex justify-between h-screen overflow-hidden ">
        <div className=" basis-2/3">
          <h1 className="text-center font-bold text-3xl ">User List</h1>
          {/* table */}
          <div className="overflow-x-auto overflow-y-scroll max-h-screen">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>#</th>
                  <th>User</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, index) => (
                  <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={user.avatar}
                        alt={user.profile.username}
                        className="w-10 h-10 rounded-full"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = dummyImage;
                        }}
                      />
                    </td>
                    <td>{`${user.profile.firstName} ${user.profile.lastName}`}</td>
                    <td>
                      <button onClick={() => handleViewClick(user)}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* table */}
        </div>
        <div className=" basis-1/3 p-4 flex flex-col justify-center">
          <h1 className="text-center font-bold text-3xl">User Detail</h1>
          {selectedUser && (
            <div className="mt-4">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.profile.username}
                className="w-24 h-24 rounded-full mx-auto"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = dummyImage;
                }}
              />
              <h2 className="text-center text-xl mt-2">{`${selectedUser.profile.firstName} ${selectedUser.profile.lastName}`}</h2>
              <p className="text-center mt-1">{selectedUser.jobTitle}</p>
              <p className="text-center mt-1">{selectedUser.profile.email}</p>
              <p className="text-center mt-1">{selectedUser.Bio}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
