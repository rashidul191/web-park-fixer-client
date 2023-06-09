import { useForm } from "react-hook-form";

const EditProfile = ({ user }) => {
  const {
    register: editProfile,
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/api/v1/users/${user?.email}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          alert("Successfully Update profile");
          window.location.reload();
        }
      });
  };
  return (
    <div>
      <div className="card w-96 flex md:mt-6 shadow-md mx-auto text-center py-6">
        <div className=" ml-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="displayName" className="label font-bold">
                Name
              </label>
              <input
                {...editProfile("displayName")}
                type="text"
                placeholder="name here"
                name="displayName"
                id="displayName"
                className="input input-sm input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="email" className="label font-bold">
                Email
              </label>
              <input
                type="text"
                placeholder={user?.email}
                disabled
                name="email"
                id="email"
                className="input input-sm input-bordered w-full max-w-xs"
              />
            </div>

            <div className="form-control w-full max-w-xs">
              <label htmlFor="address" className="label font-bold">
                Address
              </label>
              <input
                {...editProfile("address")}
                type="text"
                placeholder="address here"
                name="address"
                id="address"
                className="input input-sm input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="contactNo" className="label font-bold">
                Contact No
              </label>
              <input
                {...editProfile("contactNo")}
                type="text"
                placeholder="phone number here"
                name="contactNo"
                id="contactNo"
                className="input input-sm input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="nidNumber" className="label font-bold">
                NID Number
              </label>
              <input
                {...editProfile("nidNumber")}
                type="text"
                placeholder="NID Number here"
                name="nidNumber"
                id="nidNumber"
                className="input input-sm input-bordered w-full max-w-xs"
              />
            </div>

            <input
              className="btn btn-info text-white font-bold md:w-52 mt-5"
              type="submit"
              value={"Save Changes"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
