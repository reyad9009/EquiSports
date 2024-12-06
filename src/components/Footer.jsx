import React from "react";

const Footer = () => {
  return (
    <div className="text-center mt-[10%]">
      <footer className="footer flex lg:justify-evenly pl-5 lg:flex-row flex-col text-base-content py-20 bg-[#2196f3]">
        <nav className="">
          <h6 className="font-extrabold text-2xl text-balance">Services</h6>
          <a className="link link-hover text-base font-semibold">Skill Development</a>
          <a className="link link-hover text-base font-semibold">Career </a>
          <a className="link link-hover text-base font-semibold">Job Search</a>
          <a className="link link-hover text-base font-semibold">Interview </a>
          <a className="link link-hover text-base font-semibold">Resume Review </a>
          <a className="link link-hover text-base font-semibold">Career Transition Support </a>
        </nav>
        <nav className="">
          <h6 className="font-extrabold text-2xl text-balance">Company</h6>
          <a className="link link-hover text-base font-semibold">About us</a>
          <a className="link link-hover text-base font-semibold">Contact</a>
        </nav>
        <nav className="">
          <h6 className="font-extrabold text-2xl text-balance">Legal</h6>
          <a className="link link-hover text-base font-semibold">Terms of use</a>
          <a className="link link-hover text-base font-semibold">Privacy policy</a>
          <a className="link link-hover text-base font-semibold">Cookie policy</a>
        </nav>
        <form>
          <h6 className="font-extrabold text-2xl text-balance">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text text-base">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn bg-black border-none font-bold text-white text-lg join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </div>
  );
};

export default Footer;
