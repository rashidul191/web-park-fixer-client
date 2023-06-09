import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import EditProfile from "./EditProfile";

const MyProfile = () => {
  const [edit, setEdit] = useState(true);
  const [user] = useAuthState(auth);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (user?.email != undefined) {
      fetch(`http://localhost:5000/api/v1/users/${user?.email}`, {})
        .then((res) => res.json())
        .then((data) => {
          setUserData(data?.data);
        });
    }
  }, [user?.email]);

  return (
    <section className="m-5">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-bold uppercase">My Profile</h1>
        <p
          onClick={() => setEdit(false)}
          className="text-error font-bold cursor-pointer uppercase"
        >
          <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
          Edit
        </p>
      </div>
      <div>
        {edit ? (
          <div className="card w-11/12 bg-base-100 shadow-md text-center mx-auto">
            <div className="card-body">
              <div className="avatar">
                <div className="w-24 rounded-full mx-auto">
                  <img
                    className=""
                    src={
                      `https://i.ibb.co/vBPHFhQ/profile-icon.webp` ||
                      user?.photoURL
                    }
                  />
                </div>
              </div>
              <h2 className="font-bold">
                Name:{" "}
                <span className="text-xl text-accent">
                  {userData?.displayName}
                </span>
              </h2>
              <p className="font-bold">
                {" "}
                Email:{" "}
                <span className="text-xl text-accent">{user?.email}</span>
              </p>
              <p className="font-bold">
                {" "}
                Address:{" "}
                <span className="text-xl text-accent">{userData?.address}</span>
              </p>
              <p className="font-bold">
                {" "}
                Contact No:{" "}
                <span className="text-xl text-accent">
                  {userData?.contactNo}
                </span>
              </p>
              <p className="font-bold">
                {" "}
                NID Number:{" "}
                <span className="text-xl text-accent">
                  {userData?.nidNumber}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <div>
            <EditProfile user={user}></EditProfile>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
