import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { MdSportsVolleyball } from "react-icons/md";

const Footer = () => {
  return (
    <div className=" mt-[10%] bg-[#fd6a6a] pt-20">
      <footer className="footer flex lg:justify-center lg:gap-40 pl-5 lg:flex-row flex-col text-base-content  bg-[#fd6a6a]">
        <nav className="">
          <h6 className="font-extrabold text-2xl text-balance flex items-center gap-3"> <MdSportsVolleyball /> EquiSports</h6>
          <span className="lg:w-[25rem] text-wrap">
            EquiSports is your one-stop destination for high-quality sports
            equipment, offering a wide range of products to meet the needs of
            athletes and enthusiasts.
          </span>
          <span className="flex gap-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </span>
        </nav>
        <nav className="">
          <h6 className="font-extrabold text-2xl text-balance">Information</h6>
          <a href="">Shipping</a>
          <a href="">Sitemap</a>
          <a href="">Size Chart</a>
          <a href="">Terms & Conditions</a>
          <a href="">Contact</a>
        </nav>
        <form>
          <h6 className="font-extrabold text-2xl gap-3 text-balance">
            Contact
          </h6>
          <h1 className="text-base flex items-center">
            <IoLocationOutline className="text-xl" />{" "}
            <span>33 New Montgomery St. Ste 750 San Francisco</span>
          </h1>
          <h1 className="text-base flex items-center">
            <FaWhatsapp className="text-xl" /> <span> +8801954345645</span>
          </h1>
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
