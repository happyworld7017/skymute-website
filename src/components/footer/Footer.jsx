import React from "react";
import { Link } from "react-router-dom";
import { CONSTANTS } from "../../utils/canstants";
import Android from "../button/Android";

const Footer = () => {
  return (
    <div className="w-full  py-4 border-t border-white ">
      <footer className="max-w-[1100px] mx-auto">
        <ul></ul>
        <p className="text-xl text-center text-white uppercase">
          &copy; 2025 skymute technology pvt ltd
        </p>
        <p className="text-xl text-center text-slate-400  sm:max-w-[50%] mx-auto pt-4">
          Registered Address: Organization Address C/o SH Baljor Shekhpur, Pol
          17/125, Khekra, Baraut Bagpat, Uttar Pradesh 250101 India
        </p>
      </footer>
    </div>
  );
};

export default Footer;
