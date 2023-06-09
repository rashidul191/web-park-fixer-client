import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useRouteError } from "react-router-dom";
import auth from "../../../firebase.init";

const NotFound = () => {
  const [user] = useAuthState(auth);
  const error = useRouteError();

  return (
    <section>
      <div id="error-page" className="text-center mt-24 md:mt-32">
        <h1 className="text-xl md:text-3xl font-bold">Oops!</h1>
        <h1 className="text-xl md:text-4xl font-bold">{error?.status}-page</h1>
        <p className="font-bold">
          <i>{error.statusText || error.message}</i>
        </p>
        {user ? (
          <Link
            className="text-blue-500 underline"
            to={"/dashboard/my-profile"}
          >
            {" "}
            {"<-"} back to dashboard
          </Link>
        ) : (
          <Link className="text-blue-500 underline" to={"/"}>
            {" "}
            {"<-"} back to login
          </Link>
        )}
      </div>
    </section>
  );
};

export default NotFound;
