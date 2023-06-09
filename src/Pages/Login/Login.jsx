import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading/Loading";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register: login,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data?.email, data?.password);
  };

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate("/dashboard");
  }

  return (
    <section>
      <div className="card w-96 flex md:mt-16 shadow-lg mx-auto text-center pb-6">
        {error && (
          <p className="bg-error font-bold text-white m-5 rounded-md p-2">
            {error?.message}
          </p>
        )}
        <h1 className="text-3xl font-bold ">Please Login</h1>
        <div>
          <img
            className="w-32 mx-auto"
            src="https://i.ibb.co/r435072/349955411-2875779092557835-7591182409074271783-n.png"
            alt="logo"
          />
          <p className="font-bold text-xl">Park Fixer</p>
        </div>

        <div className=" ml-7">
          <form onSubmit={handleSubmit(onSubmit)}>
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
                type="email"
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
              </label>
            </div>

            {/* forgot password */}
            <div className="text-start ">
              <p className="text-blue-500 cursor-pointer mb-4">
                Forgot password!!
              </p>
            </div>

            <input
              className="btn btn-info text-white font-bold md:w-52"
              type="submit"
              value={"Login"}
            />
          </form>
        </div>
      </div>

      {/* <dialog id="my_modal_3" className="modal">
        <form method="dialog" className="modal-box">
          <button
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </button>
          <div className="form-control w-full max-w-xs">
            <label htmlFor="emailModal" className="label font-bold">
              Email
            </label>
            <input
              type="email"
              placeholder="email here"
              name="emailModal"
              id="emailModal"
              required
              className="input input-sm input-bordered w-full max-w-xs border-yellow-600 border-4"
            />
          </div>
          <button className="btn btn-success btn-sm w-40">
            Forgot password
          </button>
        </form>
      </dialog> */}
    </section>
  );
};

export default Login;
