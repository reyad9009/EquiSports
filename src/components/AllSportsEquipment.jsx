import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PiSortAscendingBold, PiSortDescendingBold } from "react-icons/pi"; // Import icons
import { AuthContext } from "../provider/AuthProvider";

import { Fade, Slide } from "react-awesome-reveal";
import Loading from "./Loading";

const AllSportsEquipment = () => {
  const equipments = useLoaderData();
  const [sortedEquipments, setSortedEquipments] = useState(equipments);
  const [isAscending, setIsAscending] = useState(true);
  const { loading } = useContext(AuthContext);

  const sortByPrice = () => {
    const sorted = [...sortedEquipments].sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return isAscending ? priceA - priceB : priceB - priceA;
    });
    setSortedEquipments(sorted);
    setIsAscending(!isAscending);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Slide>
        <h2 className="text-3xl text-center mb-16 font-bold">
          All Sports Equipment
        </h2>
      </Slide>

      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="lg:w-[80%] w-[98%]">
          <div className="flex justify-end">
            <button
              className="btn mb-4 flex items-center gap-2 bg-[#f55353] text-white font-bold"
              onClick={sortByPrice}
            >
              Sort by Price
              {isAscending ? (
                <span>
                  <PiSortAscendingBold className="text-xl" />
                </span>
              ) : (
                <span className="">
                  <PiSortDescendingBold className="text-xl" />
                </span>
              )}
            </button>
          </div>
          <div className="overflow-hidden shadow-md rounded-lg">
            <table className="table-fixed w-full text-left border border-gray-300">
              <thead className="uppercase bg-[#f55353] text-[#e5e7eb]">
                <tr className="border border-gray-300">
                  <td className="py-6 text-center font-bold lg:p-4 lg:block hidden">
                    Si
                  </td>
                  <td className="py-6 text-center font-bold lg:p-4">Name</td>
                  <td className="py-6 text-center font-bold lg:p-4">
                    Category
                  </td>
                  <td className="py-6 text-center font-bold lg:p-4">Price</td>
                  <td className="py-6 text-center font-bold lg:p-4 lg:block hidden">
                    Stock Status
                  </td>
                  <td className="py-6 text-center font-bold lg:p-4">Action</td>
                </tr>
              </thead>
              <tbody>
                {sortedEquipments.map((equipment, index) => (
                  <tr
                    className="border hover:bg-[#ffe4e4] border-gray-300 py-5 text-center text-wrap"
                    key={equipment._id}
                  >
                    <th className="lg:block hidden text-center mt-10">
                      {index + 1}
                    </th>
                    <td className="py-5 border border-gray-300 text-center p-4">
                      <div className="flex flex-col lg:flex-row items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-10 h-10 sm:w-14 sm:h-14">
                            <img src={equipment.image} alt="Equipment" />
                          </div>
                        </div>
                        <div>
                          <div className="lg:font-bold flex-wrap">
                            {equipment.itemName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="border border-gray-300">
                      {equipment.category}
                    </td>
                    <td className="border border-gray-300">
                      <span>$</span>
                      {equipment.price}
                    </td>
                    <td className="lg:block hidden">{equipment.stockStatus}</td>
                    <td className="border border-gray-300">
                      <Link
                        to={`/all-sports-equipments/details/${equipment._id}`}
                      >
                        <button className="btn font-bold text-xs sm:text-sm hover:bg-[#f55353]">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllSportsEquipment;
