import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { IoArrowBackOutline } from "react-icons/io5";


const CategoryDetails = () => {
  const categories = useLoaderData();
  return (
    <div>
        <div className="mb-5">
        <Link to="/">
          <button className="btn flex items-center gap-3 font-bold">
            <IoArrowBackOutline />
            Back
          </button>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
        {categories.map((categories) => (
          <CategoryCard
            key={categories._id}
            categories={categories}
          ></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
