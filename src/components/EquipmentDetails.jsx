
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const EquipmentDetails = () => {
  const equipment = useLoaderData();
  //console.log(equipment._id); // Get equipment data from loader

  const {
    image,
    itemName,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = equipment;

  return (
    <div>
      <div className="mb-5">
        <Link to="/all-sports-equipments">
          <button className="btn flex items-center gap-3 font-bold">
            <IoArrowBackOutline />
            Back
          </button>
        </Link>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-stretch gap-16 p-6 border rounded-xl w-[22rem] lg:w-[50rem]">
        <figure>
          <img src={image} className="w-[800px] rounded-lg" />
        </figure>

        <div className="flex items-center w-[100%]  justify-between">
          <div className="flex flex-col">
            <span className="card-title text-3xl ">{itemName}</span>
            <span className="">Category: {category}</span>
            <span>Description : {description}</span>
            <span>Price : {price}</span>
          
            <span>Customization : {customization}</span>
            <span>Stock: {stockStatus}</span>
            <span>processingTime : {processingTime}</span>
            <div className="flex gap-5 items-center">
              <Rating style={{ maxWidth: 120 }} readOnly value={rating} />
              <span className="text-lg">{rating}</span>
            </div>
            <br />
            <button className="btn bg-[#f55353] mt-4 text-white text-lg">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
