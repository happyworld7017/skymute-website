import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="w-full min-h-screen h-full bg-[#10192d]">
      <h1 className="text-6xl font-extrabold text-red-400">404</h1>
      <h3 className="text-3xl font-bold">page not found</h3>
      <Link to={"/"} className="hover:text-blue-500 underline text-2xl">
        Homepage
      </Link>
    </div>
  );
};

export default PageNotFound;
