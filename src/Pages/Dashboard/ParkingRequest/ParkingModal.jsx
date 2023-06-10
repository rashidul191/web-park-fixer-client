const ParkingModal = ({ parkingDetails }) => {
  const {
    address,
    carNumber,
    carStatus,
    contactNo,
    displayName,
    email,
    gender,
    nidNumber,
    parkingArea,
    parkingTime,
    payment,
    paymentNumber,
    paymentStatus,
    _id,
    request,
  } = parkingDetails;

  const handleApprovedParking = (id) => {
    fetch(`https://web-park-fixer-server.onrender.com/api/v1/parking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          alert("successfully approved parking");
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <img
        className="w-32 mx-auto"
        src="https://i.ibb.co/vBPHFhQ/profile-icon.webp"
        alt=""
      />

      <div className="grid md:grid-cols-2 gap-3 w-5/6 mx-auto m-8">
        <div>
          <h1 className="font-bold">
            Name: <span className="text-xl text-accent">{displayName}</span>
          </h1>
          <p className="font-bold">
            Address: <span className="text-xl text-accent">{address}</span>
          </p>

          <p className="font-bold">
            Email: <span className="text-xl text-accent">{email}</span>
          </p>
          <p className="font-bold">
            Contact No: <span className="text-xl text-accent">{contactNo}</span>
          </p>
          <p className="font-bold">
            NID Number: <span className="text-xl text-accent">{nidNumber}</span>
          </p>
          <p className="font-bold">
            Gender: <span className="text-xl text-accent">{gender}</span>
          </p>
        </div>
        <div>
          <p className="font-bold">
            Car Status: <span className="text-xl text-accent">{carStatus}</span>
          </p>
          <p className="font-bold">
            Car Number: <span className="text-xl text-accent">{carNumber}</span>
          </p>
          <p className="font-bold">
            Parking Area:{" "}
            <span className="text-xl text-accent">{parkingArea}</span>
          </p>
          <p className="font-bold">
            Parking Time:{" "}
            <span className="text-xl text-accent">{parkingTime}</span>
          </p>
          <p className="font-bold">
            Payment Number:{" "}
            <span className="text-xl text-accent">{paymentNumber}</span>
          </p>
          <p className="font-bold">
            Payment Status:{" "}
            <span className="text-xl text-accent">{paymentStatus}</span>
          </p>
          <p className="font-bold">
            Taka: <span className="text-xl text-secondary">{payment}tk</span>
          </p>
        </div>
      </div>

      <div className="text-center">
        {request ? (
          <p className="text-xl text-success font-bold uppercase">
            Already Approved
          </p>
        ) : (
          <div>
            <div>
              <button
                onClick={() => handleApprovedParking(_id)}
                className="btn btn-info text-white btn-sm w-40 mr-5"
              >
                Approve
              </button>

              <label
                htmlFor={`my-modal-${_id}`}
                className="btn btn-sm btn-active w-40"
              >
                Cancel
              </label>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkingModal;
