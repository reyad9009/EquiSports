import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { Link, NavLink } from "react-router-dom";
import HomeEquipmentsCategoryCard from "./HomeEquipmentsCategoryCard";

const HomeEquipmentsCategory = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/home-equipments")
      .then((response) => response.json())
      .then((data) => {
        // same type category don't show
        const uniqueCategories = Array.from(
          new Set(data.map((item) => item.category))
        ).map((category) => {
          return data.find((item) => item.category === category);
        });
        setCategories(uniqueCategories);
      });
  }, []);

  return (
    <div>
      <div className="text-center font-bold text-3xl mt-10 mb-10">Top Categories</div>
      <Zoom>
        <div className="flex flex-col lg:flex-row lg:space-x-4 gap-6 lg:gap-0 shadow-lg pb-10 px-20">
          {categories.map((category) => (
            <Link to={`/categories/${category.category}`}>
              <HomeEquipmentsCategoryCard
                key={category._id}
                category={category}
              ></HomeEquipmentsCategoryCard>
            </Link>
          ))}
        </div>{" "}
      </Zoom>
    </div>
  );
};

export default HomeEquipmentsCategory;
