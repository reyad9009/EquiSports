import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { IoArrowBackOutline } from "react-icons/io5";

const UpdateMyEquipment = () => {
  const { user, logOut } = useContext(AuthContext);
  const updateEquipment = useLoaderData();
  const {
    _id,
    image,
    itemName,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stockStatus,
  } = updateEquipment;

  const handleUpdateMyEquipment = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const itemName = form.itemName.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const email = form.email.value;
    const name = form.name.value;

    const UpdatedMyEquipment = {
      image,
      itemName,
      category,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
      email,
      name,
    };
   // console.log(UpdatedMyEquipment);
    fetch(`http://localhost:5000/my-equipments/update/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedMyEquipment),
    })
      .then((res) => res.json())
      .then((data) => {
       // console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Update Success!",
            text: "Equipment Updated Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };

  return (
    <div className="md:w-[70%] h-auto">
      <div className="mb-5">
        <Link to="/my-equipments">
          <button className="btn flex items-center gap-3 font-bold">
            <IoArrowBackOutline />
            Back
          </button>
        </Link>
      </div>
      <div className="px-12 pt-10 pb-20 rounded-xl shadow-lg">
        <form
          onSubmit={handleUpdateMyEquipment}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              placeholder="Enter image URL"
              className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              required
              defaultValue={image}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Item Name</span>
            </label>
            <input
              type="text"
              name="itemName"
              placeholder="Enter item name"
              className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              required
              defaultValue={itemName}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Category Name</span>
            </label>
            <input
              type="text"
              name="category"
              placeholder="Enter category name"
              className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              required
              defaultValue={category}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Description</span>
            </label>
            <textarea
              name="description"
              placeholder="Enter description"
              className="textarea textarea-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              required
              defaultValue={description}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Price</span>
            </label>
            <input
              type="text"
              name="price"
              placeholder="Enter price"
              className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              required
              defaultValue={price}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
              placeholder="Enter rating"
              className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              required
              defaultValue={rating}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Customization</span>
            </label>
            <input
              type="text"
              name="customization"
              placeholder="Enter customization details"
              className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              defaultValue={customization}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Processing Time</span>
            </label>
            <input
              type="text"
              name="processingTime"
              placeholder="Enter delivery time"
              className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              required
              defaultValue={processingTime}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Stock Status</span>
            </label>
            <input
              type="text"
              name="stockStatus"
              placeholder="Enter available quantity"
              className="input input-bordered focus:outline-[#f55353] focus:border-[#ffffff]"
              required
              defaultValue={stockStatus}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">User Email</span>
            </label>
            <input
              type="email"
              name="email"
              className="input input-bordered"
              readOnly
              defaultValue={user?.email}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
              readOnly
              defaultValue={user?.displayName}
            />
          </div>
          <input
            type="submit"
            value="Update"
            className="btn font-bold bg-[#f55353] w-full"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateMyEquipment;
