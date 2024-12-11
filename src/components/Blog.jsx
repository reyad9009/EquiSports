import React from "react";
import blogimg1 from "../assets/blogimg1.webp";
import blogimg2 from "../assets/blogimg2.webp";
import blogimg3 from "../assets/blogimg3.webp";

const Blog = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mt-20 mb-10">Our Latest Blog</h1>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="card card-compact rounded-none lg:w-[22rem] lg:h-[30] w-[22rem] flex flex-col border">
          <figure className="">
            <img className="w-[100%]" src={blogimg1} />
          </figure>
          <div className="card-body flex flex-grow justify-end">
            <h1>How to Outsmart Your Peers on Sport And Talking About</h1>
            <p className="text-justify">
              15 March, 2023 How to Outsmart Your Peers on Sport And Talking
              About How to Outsmart Your Peers on Sport And Talking About Donec
              tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue
              eget dapibus congue tincidunt senectus nibh risus Phasellus
              tristique justo. Justo Pellentesque Donec lobortis faucibus Donec
              tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue
              eget dapibus congue tincidunt senectus nibh risus Phasellus
              tristique justo. Justo Pellentesque Donec lobortis faucibus
              Vestibulum Praesent mauris volutpat vitae metus. Ipsum cursus
              vestibulum at interdum Vivamus nunc fringilla Curabitur ac quis.
              Nam lacinia wisi tortor orci quis vitae.
            </p>
          </div>
        </div>
        <div className="card rounded-none card-compact lg:w-[22rem] lg:h-[30] w-[22rem] flex flex-col border">
          <figure className="">
            <img className="w-[100%]" src={blogimg2} />
          </figure>
          <div className="card-body flex flex-grow justify-end">
            <h1>How to Outsmart Your Peers on Sport And Talking About</h1>
            <p className="text-justify">
              Donec tellus Nulla lorem Nullam elit id ut elit feugiat lacus.
              Congue eget dapibus congue tincidunt senectus nibh risus Phasellus
              tristique justo. Justo Pellentesque Donec lobortis faucibus Donec
              tellus Nulla lorem Nullam elit id ut elit feugiat lacus. Congue
              eget dapibus congue tincidunt senectus nibh risus Phasellus
              tristique justo. Justo Pellentesque Donec lobortis faucibus
              Vestibulum Praesent mauris volutpat vitae metus. Ipsum cursus
              vestibulum at interdum Vivamus nunc fringilla Curabitur ac quis.
            </p>
          </div>
        </div>
        <div className="card rounded-none card-compact lg:w-[22rem] lg:h-[30] w-[22rem] flex flex-col border">
          <figure className="">
            <img className="w-[100%]" src={blogimg3} />
          </figure>
          <div className="card-body flex flex-grow justify-end">
            <h1>The Most Frequently Asked Questions About Sport</h1>
            <p className="text-justify">
              15 March, 2023 The Most Frequently Asked Questions About Sport The
              Most Frequently Asked Questions About Sport Donec tellus Nulla
              lorem Nullam elit id ut elit feugiat lacus. Congue eget dapibus
              congue tincidunt senectus nibh risus Phasellus tristique justo.
              Justo Pellentesque Donec lobortis faucibus Donec tellus Nulla
              lorem Nullam elit id ut elit feugiat lacus. Congue eget dapibus
              congue tincidunt senectus nibh risus Phasellus tristique justo.
              Justo Pellentesque Donec lobortis faucibus Vestibulum Praesent
              mauris volutpat vitae metus. Ipsum cursus vestibulum at interdum
              Vivamus nunc fringilla Curabitur ac quis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
