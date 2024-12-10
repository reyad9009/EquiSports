import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className=" mt-[10%] bg-[#2196f3]">
      <div className="text-center">
        <h1 className="font-bold text-3xl py-10">GearUp Sports</h1>
      </div>
      <footer className="footer flex lg:justify-evenly pl-5 lg:flex-row flex-col text-base-content  bg-[#2196f3]">
        <nav className="">
          <h6 className="font-extrabold text-2xl text-balance">Services</h6>
          <a className="link link-hover text-base font-semibold">
            Skill Development
          </a>
          <a className="link link-hover text-base font-semibold">Career </a>
          <a className="link link-hover text-base font-semibold">Job Search</a>
          <a className="link link-hover text-base font-semibold">Interview </a>
          <a className="link link-hover text-base font-semibold">
            Resume Review{" "}
          </a>
          <a className="link link-hover text-base font-semibold">
            Career Transition Support{" "}
          </a>
        </nav>
        <nav className="">
          <h6 className="font-extrabold text-2xl text-balance">Social</h6>
          <a className="flex items-center gap-2 link link-hover text-base ">
            <span>Facebook </span><ImFacebook2 />
          </a>
          <a className="flex items-center gap-2 link link-hover text-base ">
          <span>Instagram </span><AiFillInstagram />
          </a>
          <a className="flex items-center gap-2 link link-hover text-base ">
          <span>Youtube </span><FaYoutube />
          </a>
          <a className="flex items-center gap-2 link link-hover text-base ">
          <span>Twitter </span><FaTwitter />
          </a>
        </nav>
        <form>
          <h6 className="font-extrabold text-2xl gap-3 text-balance">Contact</h6>
          <h1 className="text-base flex items-center"><FaWhatsapp /> <span> +8801954345645</span></h1>
          <p>Email: equi-sport@gmail.com</p>
        </form>
      </footer>
      <aside>
        <p className="font-bold text-center py-10">
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </div>
  );
};

export default Footer;
