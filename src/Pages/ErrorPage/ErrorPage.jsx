import { Link, useRouteError } from "react-router-dom";
import errorAnimation from "../../assets/404.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  //user router hook for error detection
  const error = useRouteError();

  return (
    <div className="flex flex-col justify-center space-y-2 items-center h-screen px-5">
      <h1 className="text-4xl text-[#FF1493] font-bold">Oops!</h1>
      <p className="text-[#FF69B4]">Sorry, an unexpected error has occurred.</p>
      <p>
        <i className="text-red-500 font-bold">
          {error.statusText || error.message}
        </i>
      </p>
      <Lottie animationData={errorAnimation} className="h-fit lg:h-[70%]"></Lottie>

      <Link to={"/"} className="btn btn-outline w-40 text-white bg-[#FF1493]">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
