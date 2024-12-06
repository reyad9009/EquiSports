import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const AddEquipment = () => {
    const { user, logOut } = useContext(AuthContext);
  return (
    <div className="md:w-[70%] h-auto px-12 pt-10 pb-20 rounded-xl shadow-md">
      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-10 items-end">
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
            placeholder="Enter rating (1-5)"
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
        <input type="submit" className="btn font-bold btn-primary w-full"/>
      </form>

    </div>
  );
};

export default AddEquipment;
