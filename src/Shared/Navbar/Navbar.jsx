import { Link, NavLink } from "react-router-dom";
import { MdHomeMax, MdOutlineConnectWithoutContact } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { BsMenuUp } from "react-icons/bs";
import "../Navbar/Style/Style.css";
import { useState } from "react";
const Navbar = () => {
  //state
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  //user TODO
  const user = true;

  //links
  const links = (
    <>
      <li className="">
        <NavLink to={"/"} className="flex flex-col justify-center items-center">
          <MdHomeMax className="text-xl"></MdHomeMax>
          <p>Home</p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/book"}
          className="flex flex-col justify-center items-center"
        >
          <BiCategory className="text-xl"></BiCategory>
          <p>Reservations </p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineConnectWithoutContact className="text-xl"></MdOutlineConnectWithoutContact>
          <p>Contact </p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineConnectWithoutContact className="text-xl"></MdOutlineConnectWithoutContact>
          <p>Link </p>
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineConnectWithoutContact className="text-xl"></MdOutlineConnectWithoutContact>
          <p>Link </p>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-[#F72D93] py-4 fixed top-0 z-20 navbar bg-opacity-90">
      <div className="container mx-auto px-5 lg:px-0 xl:px-0  flex justify-between relative">
        <div className="space-x-5 flex items-center justify-center text-white">
          <button onClick={handleIsOpen} className="lg:hidden">
            <BsMenuUp className="text-2xl"></BsMenuUp>
          </button>
          <Link to={"/"} className="text-2xl font-bold">
            Eventa
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
            <button className="btn btn-outline w-24">Login</button>
          )}
        </div>

        {/* mobile navigation */}
        {isOpen ? (
          <ul
            className={`lg:hidden absolute space-y-2 shadow-lg  duration-1000  -left-1 p-5 rounded-lg  w-44 bg-[#F72D93] bg-opacity-70 h-fit top-16 `}
          >
            {links}
          </ul>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
