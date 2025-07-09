"use client";
import { IoWatchOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { useTheme } from "./ThemeProvider";

const Header = () => {
  const { toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white flex justify-center items-center fixed">
      <div className="w-[80%] flex justify-between items-center py-3">
        <a href="#" className="flex items-center gap-2 text-[18px]">
          <IoWatchOutline />
          Mohid
        </a>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>Brands</li>
          <li>Recent Products</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <ul className="flex gap-3">
          <li>
            <CiSearch />
          </li>
          <li>
            <FaUser />
          </li>
          <li>
            <FaCartShopping />
          </li>
          <li onClick={toggleTheme}>
            <MdDarkMode />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
