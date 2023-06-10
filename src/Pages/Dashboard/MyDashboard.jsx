import {
  faCar,
  faCircleUser,
  faPlusCircle,
  faUsers,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const MyDashboard = () => {
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

  const [parkingRequest, setParkingRequest] = useState([]);
  useEffect(() => {
    fetch("https://web-park-fixer-server.onrender.com/api/v1/parking", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setParkingRequest(data?.data);
      });
  }, []);

  const [renterRequest, setRenterRequest] = useState([]);
  useEffect(() => {
    fetch("https://web-park-fixer-server.onrender.com/api/v1/renter", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setRenterRequest(data?.data);
      });
  }, []);

  // only admin

  let onlyAdmin = [];
  allUsers.map((users) => {
    if (users.role === "admin") {
      onlyAdmin.push(users);
    }
  });

  return (
    <section className="m-5">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-bold uppercase">Dashboard</h1>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
        <NavLink to={"/dashboard/my-profile"}>
          <div className="card w-52 bg-accent shadow-md hover:bg-secondary text-white hover:text-black mx-auto uppercase">
            <div className="card-body">
              <h2 className="font-bold text-center ">
                {" "}
                <FontAwesomeIcon icon={faCircleUser} /> My Profile
              </h2>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/dashboard/users"}>
          <div className="card w-52 bg-success shadow-md hover:bg-secondary text-white hover:text-black mx-auto text-center uppercase">
            <div className="card-body">
              <h2 className="font-bold">
                {" "}
                <FontAwesomeIcon icon={faUsers} /> Users
              </h2>
              <p className="text-xs font-bold">
                Total Users: {allUsers.length}
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/dashboard/parking-request"}>
          <div className="card w-52 bg-info shadow-md hover:bg-secondary text-white hover:text-black mx-auto uppercase">
            <div className="card-body">
              <h2 className=" text-center">
                {" "}
                <FontAwesomeIcon icon={faCar} /> Parking Requ
              </h2>
              <p className="text-xs font-bold">
                Total Parking Req: {parkingRequest.length}
              </p>
            </div>
          </div>
        </NavLink>
        <NavLink to={"/dashboard/renter-request"}>
          <div className="card w-52 bg-error shadow-md hover:bg-secondary text-white hover:text-black mx-auto uppercase">
            <div className="card-body">
              <h2 className=" text-center">
                {" "}
                <FontAwesomeIcon icon={faWarehouse} /> Renter Requ
              </h2>
              <p className="text-xs font-bold">
                Total Renter Req: {renterRequest.length}
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/dashboard/all-admin"}>
          <div className="card w-52 bg-pink-300 shadow-md hover:bg-secondary text-white hover:text-black mx-auto uppercase text-center">
            <div className="card-body">
              <h2 className="font-bold ">
                {" "}
                <FontAwesomeIcon icon={faUsers} /> All Admin
              </h2>
              <p className="text-xs font-bold">
                Total Admin: {onlyAdmin.length}
              </p>
            </div>
          </div>
        </NavLink>

        <NavLink to={"/dashboard/make-admin"}>
          <div className="card w-52 bg-red-300 text-white shadow-md hover:bg-secondary hover:text-black mx-auto uppercase">
            <div className="card-body">
              <h2 className="font-bold text-center">
                {" "}
                <FontAwesomeIcon icon={faPlusCircle} /> Make Admin
              </h2>
            </div>
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default MyDashboard;
