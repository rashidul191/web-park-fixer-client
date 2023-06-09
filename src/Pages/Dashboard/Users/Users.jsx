import { useEffect, useState } from "react";
import User from "./User";

const Users = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/users", {
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

  let onlyUser = [];

  allUsers.map((users) => {
    if (users.role != "admin") {
      onlyUser.push(users);
    }
  });



  return (
    <section className="m-5">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-bold uppercase">All Users</h1>
        <p>Total User: {onlyUser.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {onlyUser.map((user, index) => (
              <User key={user._id} user={user} index={index}></User>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
