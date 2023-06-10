import { useEffect, useState } from "react";
import Parking from "./Parking";

const ParkingRequest = () => {
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
  return (
    <section className="m-5">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-bold uppercase">
          Render Request
        </h1>
        <p>Total Render Request: {parkingRequest.length}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-gray-500 text-white">
            <tr>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
              <th>Request</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {parkingRequest.map((parkingReq, index) => (
              <Parking
                key={parkingReq._id}
                parkingReq={parkingReq}
                index={index}
              ></Parking>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ParkingRequest;
