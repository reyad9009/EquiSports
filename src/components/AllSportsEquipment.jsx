import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PiSortAscendingBold, PiSortDescendingBold } from "react-icons/pi"; // Import icons
import { AuthContext } from "../provider/AuthProvider";
import Loading from "./Loading";
import { Fade, Slide } from "react-awesome-reveal";

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
    <div>
      <Slide>
        <h2 className="text-3xl text-center mb-16 font-bold">
          All Sports Equipment
        </h2>
      </Slide>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div>
          <div className="flex justify-end">
            <button
              className="btn mb-4 flex items-center gap-2 bg-orange-200"
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
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead className="font-bold text-lg text-black">
                <tr>
                  <th>Si</th>
                  <th>Name</th>
                  <th>Category Name</th>
                  <th>Price</th>
                  <th>Stock Status</th>
                  <th>Details</th>
                </tr>
              </thead>

              <tbody>
                {sortedEquipments.map((equipment, index) => (
                  <tr className="hover:bg-slate-200" key={equipment._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-14 w-14">
                            <img
                              src={equipment.image}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{equipment.itemName}</div>
                        </div>
                      </div>
                    </td>
                    <td className="font-bold">{equipment.category}</td>
                    <td className="font-bold">{equipment.price}</td>
                    <td className="font-bold">{equipment.stockStatus}</td>
                    <td>
                      <Link
                        to={`/all-sports-equipments/details/${equipment._id}`}
                      >
                        <button className="btn font-bold">View Details</button>
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
