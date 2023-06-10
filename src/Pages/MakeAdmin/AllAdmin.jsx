import { useEffect, useState } from "react";
import Admin from "./Admin";

const AllAdmin = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("https://web-park-fixer-server.onrender.com/api/v1/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data.data);
      });
  }, []);

  let onlyAdmin = [];
  allUsers.map((users) => {
    if (users.role === "admin") {
      onlyAdmin.push(users);
    }
  });
  return (
    <section className="m-5">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-bold uppercase">All Admin</h1>
        <p>Total Admin: {onlyAdmin.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {onlyAdmin.map((admin, index) => (
              <Admin key={admin._id} admin={admin} index={index}></Admin>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AllAdmin;
