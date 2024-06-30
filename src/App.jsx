// import axios from "axios";
// import "./App.css";
// import { useState, useEffect } from "react";
// import dummyImage from "./assets/person-dummy.jpg";

// function App() {
//   const [userData, setUserData] = useState([]);
//   const [selectedUser, setSelectedUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://602e7c2c4410730017c50b9d.mockapi.io/users"
//         );
//         if (response.data.length === 0) {
//           setError("No data to show");
//         } else {
//           setUserData(response.data);
//         }
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError("Error fetching data. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleViewClick = (user) => {
//     setSelectedUser(user);
//   };

//   return (
//     <>
//       <div className="flex justify-between h-screen overflow-hidden">
//         <div className="basis-2/3">
//           <h1 className="text-center font-bold text-3xl">User List</h1>
//           {/* Show spinner while loading */}
//           {loading && (
//             <div className="flex justify-center mt-4">
//               <span className="loading loading-spinner loading-lg"></span>
//             </div>
//           )}
//           {/* Show error message if API request fails */}
//           {!loading && error && (
//             <div className="flex justify-center mt-4">
//               <p className="text-red-500">{error}</p>
//             </div>
//           )}
//           {/* Show table if data is available */}
//           {!loading && !error && (
//             <div className="overflow-x-auto overflow-y-scroll max-h-screen">
//               <table
//                 className={`table ${userData.length === 0 ? "hidden" : ""}`}
//               >
//                 {/* head */}
//                 <thead>
//                   <tr>
//                     <th>#</th>
//                     <th>User</th>
//                     <th>View Details</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {userData.map((user, index) => (
//                     <tr key={user.id}>
//                       <td>{index + 1}</td>
//                       <td>
//                         <img
//                           src={user.avatar}
//                           alt={user.profile.username}
//                           className="w-10 h-10 rounded-full"
//                           onError={(e) => {
//                             e.target.onerror = null;
//                             e.target.src = dummyImage;
//                           }}
//                         />
//                       </td>
//                       <td>{`${user.profile.firstName} ${user.profile.lastName}`}</td>
//                       <td>
//                         <button onClick={() => handleViewClick(user)}>
//                           View
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               {/* Show message if no data to show */}
//               {userData.length === 0 && (
//                 <div className="flex justify-center mt-4">
//                   <p>No data to show</p>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//         <div className="basis-1/3 p-4 flex flex-col justify-center">
//           <h1 className="text-center font-bold text-3xl">User Detail</h1>
//           {selectedUser && (
//             <div className="mt-4">
//               <img
//                 src={selectedUser.avatar}
//                 alt={selectedUser.profile.username}
//                 className="w-24 h-24 rounded-full mx-auto"
//                 onError={(e) => {
//                   e.target.onerror = null;
//                   e.target.src = dummyImage;
//                 }}
//               />
//               <h2 className="text-center text-xl mt-2">{`${selectedUser.profile.firstName} ${selectedUser.profile.lastName}`}</h2>
//               <p className="text-center mt-1">{selectedUser.jobTitle}</p>
//               <p className="text-center mt-1">{selectedUser.profile.email}</p>
//               <p className="text-center mt-1">{selectedUser.Bio}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import dummyImage from "./assets/person-dummy.jpg";

function App() {
  const [userData, setUserData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://602e7c2c4410730017c50b9d.mockapi.io/users"
        );
        if (response.data.length === 0) {
          setError("No data to show");
        } else {
          setUserData(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again later.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewClick = (user) => {
    setSelectedUser(user);
    if (window.innerWidth < 768) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between h-screen overflow-hidden">
        <div className="md:basis-2/3">
          <h1 className="text-center font-bold text-3xl">User List</h1>
          {/* Show spinner while loading */}
          {loading && (
            <div className="flex justify-center mt-4">
              <span className="loading loading-spinner loading-lg"></span>
            </div>
          )}
          {/* Show error message  */}
          {!loading && error && (
            <div className="flex justify-center mt-4">
              <p className="text-red-500">{error}</p>
            </div>
          )}
          {/* table */}
          {!loading && !error && (
            <div className="overflow-x-auto overflow-y-scroll max-h-screen">
              <table
                className={`table ${userData.length === 0 ? "hidden" : ""}`}
              >
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>User Image</th>
                    <th>User Name</th>
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
              {/* Show message if no data to show */}
              {userData.length === 0 && (
                <div className="flex justify-center mt-4">
                  <p>No data to show</p>
                </div>
              )}
            </div>
          )}
        </div>
        {/* Right panel for User Detail or Modal */}
        <div
          className={`md:basis-1/3 p-4 hidden md:block ${
            isModalOpen ? "hidden" : ""
          }`}
        >
          <h1 className="text-center font-bold text-3xl">User Detail</h1>
          {selectedUser && (
            <div className="mt-4">
              <img
                src={selectedUser.avatar}
                alt={selectedUser.profile.username}
                className="w-24 h-24 rounded-full mx-auto object-cover"
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
        {/* Modal */}
        {isModalOpen && selectedUser && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 md:hidden">
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full relative">
              <button
                className="absolute top-0 right-0 p-2"
                onClick={closeModal}
              >
                Close
              </button>
              <h1 className="text-center font-bold text-3xl">User Detail</h1>
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
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
