import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col mt-40 justify-center items-center font-poppins">
      <h1 className="font-bold text-4xl mb-10">404</h1>
      <h1 className="text-5xl text-red-500 font-extrabold">
        page not found !!!
      </h1>
      <Link to="/">
        <button className="bg-green-600 text-white py-5 px-10 rounded-full text-2xl mt-20">
          Go to Home Page
        </button>
      </Link>
    </div>
  );
};

export default Error;
