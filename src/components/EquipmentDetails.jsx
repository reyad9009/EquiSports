import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EquipmentDetails = () => {
  const equipment = useLoaderData();
  console.log(equipment._id) // Get equipment data from loader


  const { image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    email,
    userName,
  } = equipment;

  return (
    <div className="flex flex-col lg:flex-row lg:justify-stretch gap-16 p-6 border rounded-xl w-[22rem] lg:w-[65rem]">
      <figure>
        <img src={image} className="w-[800px] rounded-lg" />
      </figure>

      <div className="flex items-center w-[100%]  justify-between">
        <div className="flex flex-col">
          <span className="card-title text-3xl ">{itemName}</span>
          <span className="">Category: {categoryName}</span>
          <span>Description : {description}</span> 
          <span>Price : {price}</span> 
          <span>Rating : {rating}</span> 
          <span>Customization : {customization}</span> 
          <span>Stock: {stockStatus}</span> 
          <span>processingTime : {processingTime}</span> 
          <br />
          <button className="btn bg-[#2196f3] mt-4 text-white text-lg">
            Continue Course
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentDetails;
