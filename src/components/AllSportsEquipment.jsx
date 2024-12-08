import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const equipments = useLoaderData();
  const {
    image,
    itemName,
    categoryName,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
    userEmail,
    userName,
    _id,
  } = equipments;

  return (
    <div>
      <h2 className="text-3xl">equipment:</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead className="font-bold text-lg text-black">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Category Name</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="">
            {equipments.map((equipment, index) => (
              <tr className=" hover:bg-slate-200" key={equipment._id}>
                <th>{index + 1}</th>
                <td>{equipment.itemName}</td>
                <td>{equipment.categoryName}</td>
                <td>{equipment.price}</td>
                <td>{equipment.stockStatus}</td>
                <td>
                  <Link to={`/all-sports-equipments/details/${equipment._id}`}>
                    <button className="btn"> View Details</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
