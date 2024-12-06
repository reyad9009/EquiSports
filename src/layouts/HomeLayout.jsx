import React from "react";
import Navbar from "../components/Navbar";
import { Helmet } from "react-helmet";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <Helmet>
        <title>Career Kindle | Home</title>
      </Helmet>
      <div className="max-w-[100rem] mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Outlet></Outlet>
      </div>
      <div className="w-full">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default HomeLayout;
