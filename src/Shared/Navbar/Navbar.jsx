import { Link, NavLink } from "react-router-dom";
import { MdHomeMax, MdOutlineConnectWithoutContact } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { BsMenuUp } from "react-icons/bs";
import { TfiGallery } from "react-icons/tfi";
import "../Navbar/Style/Style.css";
import { useState } from "react";
import Marquee from 'react-fast-marquee'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'

const Navbar = () => {
  //state
  const [userLinkOpen, setUserLinkOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }


  console.log(isOpen);

  //user TODO
  const user = false;

  //links for guest
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

  //links for user mobile view
  const userLinks =
    <>
      <li className="">
        <NavLink to={"/"} className="flex flex-col justify-center items-center">
          <MdHomeMax size={26}></MdHomeMax>
          <p>Home</p>
        </NavLink>
      </li>
    </>

  //handleUserLink function
  const handleUserLink = () => {
    setUserLinkOpen(!userLinkOpen)
  }

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
          <button onClick={toggleDrawer} className="lg:hidden">
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
            <div className="space-x-5 ">
              <img onClick={handleUserLink} className="w-12 rounded-full avatar" src="https://i.ibb.co/TkJrbPk/png-transparent-computer-icons-user-profile-woman-avatar-rent-face-people-monochrome-thumbnail.png" alt={'user image'} />

            </div>
          ) : (
            <div className="space-x-5">
              <img className="w-12 rounded-full avatar" src="https://i.ibb.co/TkJrbPk/png-transparent-computer-icons-user-profile-woman-avatar-rent-face-people-monochrome-thumbnail.png" alt={'user image'} />
              <button className="btn btn-outline text-white">Login</button>

            </div>
          )}
        </div>

        {/*custom user link */}

        <ul
          className={` absolute space-y-5 shadow-lg duration-700 w-72 mx-auto  -left-1 p-5 rounded-lg   bg-[#F72D93] bg-opacity-90 h-fit ${userLinkOpen ? 'top-24  left-[25%] md:left-[60%] lg:left-[70%] xl:left-[80%]' : '-top-[400px] left-[70%]'} `}
        >
          <h3 className="text-white">MD Abdur Rahman</h3>
          <Link className="btn btn-outline btn-sm text-white w-full">Dashboard</Link>
          <button className="btn hover:bg-secondary btn-outline btn-sm w-full text-white">Logout</button>
        </ul>
      </div>
      {/*react drawer mobile navigation */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='top'
        className=' my-16 py-5'
      >
        <div className="flex flex-row-reverse justify-between items-center px-5">
          <div className="">
            <button onClick={toggleDrawer} className="btn btn-sm bg-red-600 text-white ">close</button>
          </div>
          <div className="">
            <p>logo</p>
          </div>
        </div>
        <ul className="bg-[#f95eac]  py-5 px-5 space-y-5 my-5">
          {
            links
          }
        </ul>
      </Drawer>
    </div>
  );
};

export default Navbar;
