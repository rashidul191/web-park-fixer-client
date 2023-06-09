const RenterModal = ({ renterDetails }) => {
  const {
    _id,
    email,
    displayName,
    address,
    nidNumber,
    paymentNumber,
    paymentStatus,
    contactNo,
    images,
    request,
  } = renterDetails;

  const handleApprovedRenter = (id) => {
    fetch(`http://localhost:5000/api/v1/renter/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          alert("successfully approved renter");
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <h1 className="text-center text-xl md:text-3xl font-bold uppercase">
        Renter Request
      </h1>
      <dir className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <img className="w-[100%] rounded-lg" src={images} alt="images" />
        </div>
        <div className="font-bold">
          <h1>
            Name: <span className="text-xl text-info ">{displayName}</span>
          </h1>
          <p>
            Contact Number:{" "}
            <span className="text-xl text-info">{contactNo}</span>
          </p>
          <p>
            Email: <span className="text-xl text-info">{email}</span>{" "}
          </p>
          <p>
            Address: <span className="text-xl text-info">{address}</span>{" "}
          </p>
          <p>
            NID Number: <span className="text-xl text-info">{nidNumber}</span>{" "}
          </p>
          <p>
            Payment Number:{" "}
            <span className="text-xl text-info">{paymentNumber}</span>{" "}
          </p>
          <p>
            Payment Status:{" "}
            <span className="text-xl text-info">{paymentStatus}</span>{" "}
          </p>
        </div>
      </dir>

      <div className="text-center">
        {request ? (
          <p className="text-xl text-success font-bold uppercase">
            Already Approved
          </p>
        ) : (
          <div>
            <div>
              <button
                onClick={() => handleApprovedRenter(_id)}
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

export default RenterModal;
