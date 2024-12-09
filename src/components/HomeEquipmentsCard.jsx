import React from "react";

const HomeEquipmentsCard = ({ homeEquipments }) => {
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
  } = homeEquipments;
  return (
    <div>
      <div>
        <div className="card card-compact lg:w-[25rem] lg:h-[35] w-[22rem] flex flex-col border">
          <figure className="">
            <img className="w-[100%]" src={image} />
          </figure>
          <div className="card-body flex flex-grow justify-end ml-4">
            <span className="card-title font-bold text-2xl">{itemName}</span>
            <span className="font-semibold text-base">Price: {price} $</span>
            <span className="font-semibold text-base">
              Description: {description}
            </span>
            <span className="font-semibold text-base">
              Customization: {customization}
            </span>
            <span className="font-semibold text-base">Rating: {rating}</span>
            <span className="font-semibold text-base">
              Processing Time: {processingTime}
            </span>
            <span className="font-semibold text-base">
              Stock Status: {stockStatus}
            </span>
            <span className="font-semibold text-base">
              category: {category}
            </span>

            <div className="card-actions justify-start">
              <button
                onClick={() => handelDeleteMyEquipmentCard(_id)}
                className="px-6 py-3 font-bold rounded-full bg-[#2196f3] text-white text-base mt-2 mb-4"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeEquipmentsCard;
