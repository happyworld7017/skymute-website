import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../utils/canstants";
import Android from "../button/Android";

const Footer = () => {
  return (
    <div className="w-full  py-4 border-t border-white ">
      <footer className="max-w-[1100px] mx-auto">
        <ul></ul>
        <p className="text-xl text-center text-white">&copy; 2025 , skymute</p>
      </footer>
    </div>
  );
};

export default Footer;
