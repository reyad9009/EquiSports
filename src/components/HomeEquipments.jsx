import React from "react";
import { useLoaderData } from "react-router-dom";
import HomeEquipmentsCard from "./HomeEquipmentsCard";

const HomeEquipments = () => {
  const homeEquipments = useLoaderData();
  return (
    <div>
     <h1 className="text-center font-bold text-4xl mt-16 mb-10">Trending Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
        {homeEquipments.map((equipment) => (
          <HomeEquipmentsCard
            key={equipment._id}
            homeEquipments={equipment}
          ></HomeEquipmentsCard>
        ))}
      </div>
    </div>
  );
};

export default HomeEquipments;
