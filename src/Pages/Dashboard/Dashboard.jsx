import { useSignOut } from "react-firebase-hooks/auth";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import {
  faCar,
  faCircleUser,
  faRightFromBracket,
  faTableColumns,
  faUserPlus,
  faUsers,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Dashboard = () => {
  const navigate = useNavigate();
  const [signOut, loading] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
    navigate("/");
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          {/* <h1>hi</h1> */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button md:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-52 h-full bg-green-200 text-base-content">
            {/* Sidebar content here */}
            <li className="mb-3 font-bold">
              <NavLink to={"/dashboard"}>
                {" "}
                <FontAwesomeIcon icon={faTableColumns} /> Dashboard
              </NavLink>
            </li>
            <li className="mb-3 font-bold">
              <NavLink to={"/dashboard/my-profile"}>
                {" "}
                <FontAwesomeIcon icon={faCircleUser} />My Profile
              </NavLink>
            </li>
            <li className="mb-3 font-bold">
              <NavLink to={"/dashboard/users"}>
                {" "}
                <FontAwesomeIcon icon={faUsers} /> Users
              </NavLink>
            </li>
            <li className="mb-3 font-bold">
              <NavLink to={"/dashboard/parking-request"}>
                {" "}
                <FontAwesomeIcon icon={faCar} /> Parking Request
              </NavLink>
            </li>
            <li className="mb-3 font-bold">
              <NavLink to={"/dashboard/renter-request"}>
                {" "}
                <FontAwesomeIcon icon={faWarehouse} /> Renter Request
              </NavLink>
            </li>
            <li className="mb-3 font-bold">
              <NavLink to={"/dashboard/all-admin"}>
                {" "}
                <FontAwesomeIcon icon={faUsers} /> All Admin
              </NavLink>
            </li>
            <li className="mb-3 font-bold">
              <NavLink to={"/dashboard/make-admin"}>
                {" "}
                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
              </NavLink>
            </li>

            <button
              className="btn btn-error btn-sm text-white font-bold"
              onClick={handleLogout}
            >
              <FontAwesomeIcon icon={faRightFromBracket} /> Logout
            </button>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
