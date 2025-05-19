import React, { useState } from "react";
import { Link } from "react-router-dom";
import { theme } from "../../utils/colors";
// const icon = "../../assets/icons.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const headerStyle = {
    backgroundColor: theme?.colors?.primary,
  };

  const navTextStyle = {
    color: theme?.colors?.secondary,
  };

  const [toggleMenu, setToggleMenu] = useState(true);

  const toggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header
      className="w-full max-h-20 border-b border-blue-200 py-5 "
      style={headerStyle}
    >
      <nav
        className="w-full max-w-[1100px] mx-auto flex justify-between  text-2xl font-semibold capitalize px-5 "
        style={navTextStyle}
      >
        <Link to={"/"} className="flex items-center gap-2">
          <img src="/images/icon.svg" width={45} alt="icon" />
          <span>skymute</span>
        </Link>

        <button onClick={toggle} className="md:hidden">
          {" "}
          {toggleMenu ? <AiOutlineMenu /> : <RxCross1 />}
        </button>

        {
          <ul className=" md:items-center md:gap-20 md:flex hidden">
            <li className="hover:text-blue-600">
              <Link to="/about">about</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/terms">T&Cs</Link>
            </li>
          </ul>
        }

        {/* small devices navbar */}
      </nav>
      <>
        {!toggleMenu ? (
          <ul className="bg-slate-900  flex flex-col absolute top-20 border-b text-white border-blue-400  w-full h-[140px] pl-6 py-4 mb-2 gap-3.5 text-xl">
            <li className="hover:text-blue-600">
              <Link to="/about">about</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/privacy-policy">Privacy policy</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/terms">T&Cs</Link>
            </li>
          </ul>
        ) : (
          ""
        )}
      </>
    </header>
  );
};

export default Navbar;
