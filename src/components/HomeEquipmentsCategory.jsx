import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
      <div className="flex flex-col lg:flex-row lg:space-x-4 gap-6 lg:gap-0  p-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-[#2196f3] text-lg text-white font-bold px-10 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
              : "bg-white text-lg px-10 btn rounded-full border-[#2196f3] hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
          }
        >
          All Equipment
        </NavLink>
        {categories.map((category) => (
          <NavLink
            key={category.id}
            to={`/categories/${category.category}`}
            className={({ isActive }) =>
              isActive
                ? "bg-[#2196f3] text-lg text-white font-bold px-10 btn rounded-full hover:bg-transparent hover:text-[#2196f3]"
                : "bg-white text-lg px-10 btn rounded-full border-[#2196f3] hover:border-[#2196f3] hover:bg-transparent hover:text-[#2196f3]"
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomeEquipmentsCategory;
