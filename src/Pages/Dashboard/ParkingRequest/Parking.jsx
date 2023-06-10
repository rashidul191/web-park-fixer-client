import { faEye, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ParkingModal from "./ParkingModal";

const Parking = ({ parkingReq, index }) => {
  const { _id, displayName, address, email, request } = parkingReq;
  const [parkingDetails, setParkingDetails] = useState({});

  const handleParkingDetails = (id) => {
    fetch(`https://web-park-fixer-server.onrender.com/api/v1/parking/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setParkingDetails(data?.data);
      });
  };

  const handleParkingDelete = (id) => {
    fetch(`https://web-park-fixer-server.onrender.com/api/v1/parking/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data?.deletedCount) {
          toast.success("Delete Successfully");
        }
        window.location.reload();
      });
  };

  return (
    <>
      <tr>
        <th>{index + 1}</th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img
                  src="https://i.ibb.co/vBPHFhQ/profile-icon.webp"
                  alt="image"
                />
              </div>
            </div>
            <div>
              <div className="font-bold">{displayName}</div>
              <div className="text-sm opacity-50">{address}</div>
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm font-bold">{email}</span>
        </td>
        <td className="font-bold">
          <p className="uppercase text-success">
            {request ? request : <span className="text-error">No</span>}
          </p>
        </td>
        <td>
          <label
            htmlFor={`my-modal-${_id}`}
            onClick={() => handleParkingDetails(_id)}
            className="btn btn-info btn-xs text-white text-sm"
          >
            <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
          </label>
          <button
            onClick={() => handleParkingDelete(_id)}
            className="btn btn-error btn-xs text-white ml-2"
          >
            <FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon>
          </button>
          <ToastContainer />
        </td>
      </tr>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={`my-modal-${_id}`} className="modal-toggle" />
      {/* application form modal */}
      <div className="modal md:pt-16">
        <div className="modal-box md:w-3/4 md:ml-48 max-w-5xl">
          <label
            htmlFor={`my-modal-${_id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <ParkingModal parkingDetails={parkingDetails}></ParkingModal>
        </div>
      </div>
    </>
  );
};

export default Parking;
