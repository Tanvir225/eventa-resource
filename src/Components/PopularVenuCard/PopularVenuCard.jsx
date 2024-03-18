/* eslint-disable react/prop-types */
import { FaLocationArrow } from "react-icons/fa";
import { Link } from "react-router-dom";

const PopularVenuCard = ({image,name,location}) => {
  return (
    <div className=" bg-slate-100/70 px-3  py-4 mx-auto rounded-lg space-y-3 shadow-md group">
      {/* Card Image */}
      <div className="relative w-full">
        <img
          className="w-full h-[30vh]  bg-gray-400 rounded-2xl group-hover:scale-105 duration-300"
          src={image}
          alt={`Image of ${name}`}
        />
        <p className="absolute top-1 right-2 bg-[#FF69B4] px-2 py-1 rounded-lg text-white">
          popular
        </p>
      </div>
      {/* Card Heading */}
      <div className="">
        <h2 className="text-slate-800 text-center font-medium md:text-xl sm:text-lg ">
         {name}
        </h2>
        <Link
          to={location}
          className="text-[#FF69B4] font-semibold hover:text-gray-400 text-sm"
        >
          <p className="flex justify-center items-center gap-2 py-2">
            <FaLocationArrow></FaLocationArrow>View Live Location
          </p>
        </Link>
        {/* rating  */}
      </div>
      {/*  action button */}
      <div className="flex justify-center items-center font-medium">
        <button className="w-[80%] bg-[#FF1493] text-white px-6 py-2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
          View Profile
        </button>
      </div>
    </div>
  );
};

export default PopularVenuCard;
