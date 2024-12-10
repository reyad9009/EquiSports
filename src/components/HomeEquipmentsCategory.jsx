import React, { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
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
      <Zoom>
        <div className="flex flex-col lg:flex-row lg:space-x-4 gap-6 lg:gap-0  p-4">
          <NavLink to="/" className={({ isActive }) => (isActive ? "" : "")}>
            All Equipment
          </NavLink>

          {categories.map((category) => (
            <NavLink
              key={category.id}
              to={`/categories/${category.category}`}
              className={({ isActive }) =>
                `relative inline-block pb-2 ${
                  isActive
                    ? "border-b-4 border-[#000000]"
                    : "hover:before:w-full hover:before:bg-[#000000]"
                } before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-0 before:bg-transparent before:transition-all before:duration-300`
              }
            >
              {category.category}
            </NavLink>
          ))}
        </div>{" "}
      </Zoom>
    </div>
  );
};

export default HomeEquipmentsCategory;
