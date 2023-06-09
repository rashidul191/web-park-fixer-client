import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const MakeAdmin = () => {
  const [showPass, setShowPass] = useState(false);
  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const {
    register: login,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/api/v1/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.data) {
          alert("Successfully Create a admin");
          createUserWithEmailAndPassword(data?.email, data?.password);
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <section className="m-5">
      <h1 className="text-xl md:text-3xl font-bold uppercase">Make Admin</h1>
      <div className="card w-96 flex md:mt-6 shadow-md mx-auto text-center py-6">
        {error && (
          <p className="bg-error font-bold text-white m-5 rounded-md p-2">
            {error?.message}
          </p>
        )}

        <div className=" ml-7">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="displayName" className="label font-bold">
                Name
              </label>
              <input
                {...login("displayName", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },
                })}
                type="text"
                placeholder="name here"
                name="displayName"
                id="displayName"
                className="input input-sm input-bordered w-full max-w-xs"
              />

              <label className="label">
                {errors?.displayName?.type === "required" && (
                  <span className="text-error">
                    {errors?.displayName?.message}
                  </span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="email" className="label font-bold">
                Email
              </label>
              <input
                {...login("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Provide a valid Email",
                  },
                })}
                type="text"
                placeholder="email here"
                name="email"
                id="email"
                className="input input-sm input-bordered w-full max-w-xs"
              />

              <label className="label">
                {errors?.email?.type === "required" && (
                  <span className="text-error">{errors?.email?.message}</span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="text-error">{errors?.email?.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label htmlFor="password" className="label font-bold">
                Password
              </label>
              <div className="flex">
                <input
                  {...login("password", {
                    required: {
                      value: true,
                      message: "password is required",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{6,}$/,
                      message: (
                        <>
                          <li>Must be 6 characters or longer</li>
                          <li>Must be 1 Letters</li>
                          <li>Must be 1 Digits</li>
                          <li>Must be 1 Special characters</li>
                        </>
                      ),
                    },
                  })}
                  type={showPass ? "text" : "password"}
                  placeholder="password here"
                  name="password"
                  id="password"
                  className="input input-sm input-bordered w-full max-w-xs rounded-r-none"
                />
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200  rounded-r ">
                  {showPass ? (
                    <span onClick={() => setShowPass(false)}>
                      <FontAwesomeIcon icon={faEye} />
                    </span>
                  ) : (
                    <span onClick={() => setShowPass(true)}>
                      <FontAwesomeIcon icon={faEyeSlash} />
                    </span>
                  )}
                </span>
              </div>

              <label className="label">
                {errors?.password?.type === "required" && (
                  <span className="text-error">
                    {errors?.password?.message}
                  </span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="text-error">{errors?.email?.message}</span>
                )}
              </label>
            </div>

            <input
              className="btn btn-info text-white font-bold md:w-52"
              type="submit"
              value={"Create Admin"}
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default MakeAdmin;
