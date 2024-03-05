import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center  bg-gray-100 space-y-2 py-5">
      <div className="flex justify-between w-[90%] lg:w-[80%] items-center">
        <Link to={"/"} className="btn text-[#FF69B4]">
          <FaArrowLeft size={26} className=""></FaArrowLeft> go home
        </Link>
        <p>logo</p>
      </div>
      <div className="flex flex-col-reverse  lg:flex-row justify-between w-[90%] lg:w-[80%] h-[90vh] lg:h-[85vh] bg-base-100 shadow-md rounded-lg ">
        <div className="p-7 lg:w-1/2 space-y-5">
          <h2 className="text-2xl text-[#FF69B4] font-bold border-b-2 py-2">
            Eventa - Sign In
          </h2>
          <form className="space-y-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
              <div className="underline text-red-500 mt-2">
                <Link>forget password?</Link>
              </div>
            </div>

            <button type="submit" className="btn bg-[#FF1493] text-white w-full">Login</button>
          </form>
        </div>
        <div className="lg:w-64 rounded-lg bg-[#F72D93] h-[25vh] lg:h-full"></div>
      </div>
    </div>
  );
};

export default Login;
