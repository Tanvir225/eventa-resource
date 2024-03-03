import { Link, NavLink } from "react-router-dom";
import { MdHomeMax, MdOutlineConnectWithoutContact } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { BsMenuUp } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import "../Navbar/Style/Style.css";
import { useState } from "react";
import Marquee from 'react-fast-marquee'

const Navbar = () => {
  //state
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  //user TODO
  const user = false;

  //links
  const links = (
    <>
      <li className="">
        <NavLink to={"/"} className="flex flex-col justify-center items-center">
          <MdHomeMax size={26}></MdHomeMax>
          <p>Home</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/book"}
          className="flex flex-col justify-center items-center"
        >
          <BiCategory size={26}></BiCategory>
          <p>Reservations </p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineConnectWithoutContact size={26}></MdOutlineConnectWithoutContact>
          <p>Contact </p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineConnectWithoutContact size={26}></MdOutlineConnectWithoutContact>
          <p>Category </p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <TfiGallery size={26}></TfiGallery>
          <p>Gallery </p>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#F72D93] py-4 fixed top-0 z-20 navbar flex-col space-y-5 bg-opacity-90">
      <div className="container mx-auto  space-x-10 px-5 lg:px-0">
        <Link to={"/"} className="text-2xl text-white font-bold">
          Eventa
        </Link>
        <Marquee className="bg-white rounded-lg container mx-auto p-1 lg:px-0">hi</Marquee>

      </div>
      <div className="container mx-auto px-5 lg:py-1 xl:px-0  flex justify-between relative">
        <div className="space-x-5 md:space-x-0 flex items-center justify-center text-white">
          <button onClick={handleIsOpen} className="lg:hidden">
            <BsMenuUp className="text-2xl"></BsMenuUp>
          </button>
          <Link to={"/"} className="text-2xl font-bold">
          Logo
        </Link>
        </div>
        <ul className=" justify-center gap-10 items-center text-neutral-900 hidden lg:flex">
          {links}
        </ul>

        <div>
          {user ? (
            <div className="space-x-5">
              <button className="btn btn-outline w-24">Dashboard</button>
              <button className="btn btn-outline w-24">Logout</button>
            </div>
          ) : (
            <button className="btn btn-outline w-24 text-white">Login</button>
          )}
        </div>

        {/* mobile navigation */}

        <ul
          className={`lg:hidden absolute space-y-2 shadow-lg duration-700  -left-1 p-5 rounded-lg  w-72 bg-[#F72D93] bg-opacity-90 h-fit ${isOpen ? 'top-16' : '-top-[400px]'} `}
        >
          {links}
        </ul>

      </div>
    </div>
  );
};

export default Navbar;
