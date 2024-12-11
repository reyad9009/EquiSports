import React from "react";
import { CiWallet } from "react-icons/ci";
import { IoWallet } from "react-icons/io5";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";

const Support = () => {
  return (
    <div className="flex flex-col justify-center  items-center text-center my-28 w-[80%] shadow-lg pb-10">
      <div className="font-bold text-4xl mb-10">Why You Trust Us?</div>
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col items-center  gap-5">
          <LiaShippingFastSolid className="text-7xl" />
          <h1 className="font-bold text-2xl">Worldwide Shipping</h1>
          <p className="text-xl w-[60%]">
            Ensures the delivery of goods to customers across the globe,
            offering accessibility and convenience.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <TbTruckReturn className="text-7xl" />
          <h1 className="font-bold text-2xl">Easy 30 Day Returns</h1>
          <p className="text-xl w-[60%]">
            Ensures a hassle-free process for returning products within 30 days
            of purchase.
          </p>
        </div>
        <div className="flex flex-col items-center  gap-5">
          <CiWallet className="text-7xl" />
          <h1 className="font-bold text-2xl">Money Back Guarantee</h1>
          <p className="text-xl w-[60%]">
            Ensures customers can receive a full refund if they are not
            satisfied with a product or service within a specified period.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Support;
