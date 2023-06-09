import { useEffect, useState } from "react";
import Renter from "./Renter";

const RenterRequest = () => {
  const [renterRequest, setRenterRequest] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/renter", {
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
  return (
    <section className="m-5">
      <div className="flex justify-between">
        <h1 className="text-xl md:text-3xl font-bold uppercase">
          Render Request
        </h1>
        <p>Total Render Request: {renterRequest.length}</p>
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
            {renterRequest.map((renterReq, index) => (
              <Renter
                key={renterReq._id}
                renterReq={renterReq}
                index={index}
              ></Renter>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default RenterRequest;
