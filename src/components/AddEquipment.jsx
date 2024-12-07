import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleAddEquipment = (event) => {
    event.preventDefault();
    const form = event.target;

    const image = form.image.value;
    const itemName = form.itemName.value;
    const categoryName = form.categoryName.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;

    const newAddedEquipment = {
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
    };
    console.log(newAddedEquipment);

    // send data to the server-MongoDB
    fetch("http://localhost:5000/equipments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddedEquipment),
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text:  `${itemName} Added Successfully`,
                icon: 'success',
                confirmButtonText: 'Ok'
              })
        }
    })
  };

  return (
    <div className="md:w-[70%] h-auto px-12 pt-10 pb-20 rounded-xl shadow-md">
      <form
        onSubmit={handleAddEquipment}
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
            className="input input-bordered"
            required
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
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Category Name</span>
          </label>
          <input
            type="text"
            name="categoryName"
            placeholder="Enter category name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Description</span>
          </label>
          <textarea
            name="description"
            placeholder="Enter description"
            className="textarea textarea-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Price</span>
          </label>
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Rating</span>
          </label>
          <input
            type="number"
            name="rating"
            placeholder="Enter rating (1.0-5.0)"
            className="input input-bordered"
            required
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
            className="input input-bordered"
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
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Stock Status</span>
          </label>
          <input
            type="number"
            name="stockStatus"
            placeholder="Enter available quantity"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">User Email</span>
          </label>
          <input
            type="email"
            name="userEmail"
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
            name="userName"
            className="input input-bordered"
            readOnly
            defaultValue={user?.displayName}
          />
        </div>
        <input type="submit" className="btn font-bold btn-primary w-full" />
      </form>
    </div>
  );
};

export default AddEquipment;
