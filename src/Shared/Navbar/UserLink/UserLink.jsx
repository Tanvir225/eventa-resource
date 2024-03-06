import { BiCategory } from "react-icons/bi";
import { LuGalleryThumbnails } from "react-icons/lu";
import { MdHomeMax, MdOutlineConnectWithoutContact } from "react-icons/md";
import { NavLink } from "react-router-dom";

const UserLink = () => {
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
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <MdOutlineConnectWithoutContact
            size={26}
          ></MdOutlineConnectWithoutContact>
          <p>Category </p>
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
          <MdOutlineConnectWithoutContact
            size={26}
          ></MdOutlineConnectWithoutContact>
          <p>Contact </p>
        </NavLink>
      </li>

      <li className="">
        <NavLink
          to={"/contact"}
          className="flex flex-col justify-center items-center"
        >
          <LuGalleryThumbnails size={26}></LuGalleryThumbnails>
          <p>Gallery </p>
        </NavLink>
      </li>
    </>
  );
  return links
};

export default UserLink;
