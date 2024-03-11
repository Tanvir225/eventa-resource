import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaArrowLeft, FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import animation from "../../assets/landing_animation.json"
import Lottie from "lottie-react";
import { RiAlertLine } from "react-icons/ri";

const Login = () => {
  //state
  const [showPassword, setIsShowPassword] = useState(false);

  //password  visibility toggle
  const handlePasswordShow = () => {
      setIsShowPassword(!showPassword)
  };

  //login functionality
  const {
    register,
    handleSubmit,
    formState: { errors }, //TODO SET ERROR IN A STATE
  } = useForm();

  const onSubmit = (data) => console.log(data, errors);

  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-5 bg-base-100 p-5 md:p-0">
      <div className="flex justify-between w-[90%] lg:w-[80%]  items-center">
        <Link to={"/"} className="btn bg-[#FF69B4] text-white">
          <FaArrowLeft size={26} className=""></FaArrowLeft> go home
        </Link>
        <p>logo</p>
      </div>
      <div className="flex h-full w-full overflow-hidden rounded-xl shadow-md  md:h-[90%] md:w-[80%] lg:h-[80%]">
        {/* register design side  */}
        <div className="relative hidden h-full items-center justify-center bg-[#FF69B4] md:flex md:w-[60%] lg:w-[40%]">
          <div className="absolute -top-2 left-[20%] h-16 w-16 rounded-full bg-gradient-to-br  from-white via-[#f58be7] to-[#6585dd]"></div>
          <div className="absolute bottom-[18%] left-[20%] h-20 w-20 rounded-full bg-gradient-to-br  from-white via-[#f58be7] to-[#6585dd]"></div>
          <div className="absolute -right-7 top-[50%] h-14 w-14 -translate-y-1/2 rounded-full bg-gradient-to-br from-white via-[#f58be7] to-[#6585dd] transition-all"></div>
          <div className="absolute left-[50%] top-[22%] h-24 w-24 -translate-x-1/2 rounded-full  bg-gradient-to-br from-white via-[#f58be7] to-[#6585dd]"></div>
          <div className="space-y-2 text-center mt-16">
            <h2 className="text-3xl font-medium text-white/80 ">
              Welcome Back
            </h2>
            <p className="animate-bounce text-2xl font-bold text-white/60">
              Eventa
            </p>
            <Lottie animationData={animation} className="h-24"></Lottie>
          </div>
        </div>
        {/* input side  */}
        <div className="flex w-full flex-col justify-center bg-white py-10 lg:w-[60%]">
          <h2 className="text-center text-3xl font-bold text-[#FF69B4] mb-3">
            Login Here
          </h2>
          {
            errors.email || errors.password ? <p className="text-red-500 font-semibold justify-center gap-2 flex items-center py-3"><RiAlertLine ></RiAlertLine>{errors?.email?.message || errors?.password?.message}</p> : null
          }
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex  w-full flex-col items-center justify-center gap-4"
          >
            <input
              className="w-[80%] rounded-lg border border-[#FF69B4] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
              type="email"
              placeholder="Email"
              {...register("email", {required:"Email is required"})}
              
            />
            <div className="w-full text-center relative">
              <input
                className="w-[80%]  rounded-lg border border-[#FF69B4] px-6 py-2 focus:outline-none focus:ring-2 focus:ring-[#8EA7E9]/50 md:w-[60%]"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                name="password"
                {...register("password",{required:"Password is required"})}
                
              />
              {showPassword ? (
                <FaEyeSlash onClick={handlePasswordShow} className="absolute top-[20%] right-[15%] md:right-[22%]"></FaEyeSlash>
              ) : (
                <FaEye onClick={handlePasswordShow} className="absolute top-[20%] right-[15%] md:right-[22%]"></FaEye>
              )}
              <p className="text-left w-[80%] md:w-[60%] mx-auto my-1"><Link>Forget password?</Link></p>
            </div>
            <p className="text-[14px] text-gray-400">
              Do not have an account ?{" "}
              <Link
                to={"/user-sign-up"}
                className="text-[#FF69B4] font-bold underline "
              >
                Create one
              </Link>
            </p>
            <button
              className="w-[80%] rounded-lg bg-[#FF69B4] px-6 py-1 font-medium text-white md:w-[60%]"
              type="submit"
            >
              Login
            </button>
          </form>
          {/* divider  */}
          <div className="my-3 flex items-center px-8">
            <hr className="flex-1" />
            <div className="mx-4 text-gray-400">OR</div>
            <hr className="flex-1" />
          </div>
          {/* sign with google */}
          <div className="mx-auto flex h-[50px] w-[200px] items-center overflow-hidden rounded-full shadow-md duration-300 hover:scale-95 hover:shadow">
            <div className="flex h-full w-[50%] items-center bg-[#FF69B4] pl-4 text-sm text-white">
              Sign With
            </div>
            <span className="right-0 top-0 h-0 w-0 -rotate-90 border-b-[50px] border-r-[50px] border-b-transparent border-r-[#FF69B4] group-hover:hidden"></span>
            <span className="pr-4 text-4xl font-bold text-[#FF69B4]">
              <FaGoogle></FaGoogle>
            </span>
          </div>
          <p className="text-[14px] text-center mt-5 font-semibold text-gray-600">
            Do not have a vendor account ?{" "}
            <Link
              to={"/vendor-sign-up"}
              className="text-[#FF69B4] font-bold underline "
            >
              Create one
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
