import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentCard = ({ equipment, setEquipment, equipments }) => {
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
    userEmail,
    userName,
    _id,
  } = equipment;

  const handelDeleteMyEquipmentCard = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/my-equipments/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your coffee has been deleted.",
                icon: "success",
              });
              const remaining = equipments.filter(
                (equipmentCard) => equipmentCard._id !== _id
              );
              setEquipment(remaining);
            }
          });
      }
    });
  };
  return (
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
          <span className="font-semibold text-base">category: {category}</span>
          
          <div className="card-actions justify-start">
            <button
              onClick={() => handelDeleteMyEquipmentCard(_id)}
              className="px-6 py-3 font-bold rounded-full bg-[#2196f3] text-white text-base mt-2 mb-4"
            >
              Delete ❌
            </button>
            <Link to={`/my-equipments/update/${_id}`}>
              <button className="px-6 py-3 font-bold rounded-full bg-[#2196f3] text-white text-base mt-2 mb-4">
                Update ✏️
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentCard;
