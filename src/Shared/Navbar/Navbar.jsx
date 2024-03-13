import { Link, NavLink } from "react-router-dom";
import "../Navbar/Style/Style.css";
import { useState } from "react";
import Marquee from "react-fast-marquee";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import UserLink from "./UserLink/UserLink";
import { BsMenuUp } from "react-icons/bs";
import { BiMessageSquareEdit } from "react-icons/bi";

const Navbar = () => {
  //state
  const [userLinkOpen, setUserLinkOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  console.log(isOpen);

  //user TODO
  const user = true;

  //handleUserLink function
  const handleUserLink = () => {
    setUserLinkOpen(!userLinkOpen);
  };

  return (
    <div className="bg-[#F72D93] py-4 fixed top-0 z-20 navbar flex-col space-y-5 bg-opacity-90">
      <div className="container mx-auto  space-x-10 px-5 lg:px-0">
        <Link to={"/"} className="text-2xl text-white font-bold">
          Eventa
        </Link>
        <Marquee className="bg-white rounded-lg container mx-auto p-1 lg:px-0">
          hi
        </Marquee>
      </div>

      <div className="container mx-auto px-5 lg:py-1 xl:px-0  flex justify-between relative">
        <div className="space-x-5 md:space-x-0 flex items-center justify-center text-white">
          <button onClick={toggleDrawer} className="lg:hidden">
            <BsMenuUp className="text-2xl"></BsMenuUp>
          </button>
          <Link to={"/"} className="text-2xl font-bold">
            Logo
          </Link>
        </div>
        <ul className=" justify-center gap-10 items-center text-neutral-900 hidden lg:flex">
          <UserLink></UserLink>
        </ul>

        <div>
          {user ? (
            <ul className="flex items-center gap-5">
              <li className="">
                <NavLink
                  to={"/post"}
                  className="flex flex-col justify-center items-center"
                >
                  <BiMessageSquareEdit size={26}></BiMessageSquareEdit>
                  <p>post</p>
                </NavLink>
              </li>
              <img
                onClick={handleUserLink}
                className="size-[50px] bg-slate-500 object-cover rounded-full hover:blur-[2px] duration-500"
                src="https://source.unsplash.com/300x300/?profile"
                alt="avatar navigate ui"
              />
            </ul>
          ) : (
            <div className="flex items-center gap-5">
             
              <Link to={"/login"} className="btn btn-outline text-white w-full md:w-32 lg:w-48">
                Login
              </Link>
            </div>
          )}
        </div>

        {/*custom user link */}

        <ul
          className={` absolute space-y-5 shadow-lg duration-700 w-72 mx-auto  -left-1 p-5 rounded-lg   bg-[#F72D93] bg-opacity-90 h-fit ${
            userLinkOpen
              ? "top-24 sm:left-[20%]  left-[25%] md:left-[60%] lg:left-[80%] xl:left-[80%]"
              : "-top-[400px] left-[60%]"
          } `}
        >
          <h3 className="text-white">MD Abdur Rahman</h3>
          <Link className="btn btn-outline btn-sm text-white w-full">
            Dashboard
          </Link>
          <button className="btn  btn-outline btn-sm w-full text-white">
            Logout
          </button>
        </ul>
      </div>

      {/*react drawer mobile navigation */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="top"
        enableOverlay={false}
        className=" my-16 py-5"
      >
        <div className="flex flex-row-reverse justify-between items-center px-5">
          <div className="">
            <button
              onClick={toggleDrawer}
              className="btn btn-sm bg-red-600 text-white "
            >
              close
            </button>
          </div>
          <div className="">
            <p>logo</p>
          </div>
        </div>
        <ul className="bg-[#f95eac]  py-5 px-5 space-y-5 my-5"><UserLink></UserLink></ul>
      </Drawer>
    </div>
  );
};

export default Navbar;
