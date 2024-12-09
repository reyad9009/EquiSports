import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../layouts/Home";
import Error from "../Error/Error";
import AddEquipment from "../components/AddEquipment";
import AllSportsEquipment from "../components/AllSportsEquipment";
import MyEquipment from "../components/MyEquipment";
import EquipmentDetails from "../components/EquipmentDetails";
import UpdateMyEquipment from "../components/UpdateMyEquipment";
import PrivateRout from "./PrivateRout";
import HomeEquipments from "../components/HomeEquipments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/categories/:category",
            element: <HomeEquipments></HomeEquipments>,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/categories/${params.category}`),
          },
          {
            path: "/",
            element: <HomeEquipments></HomeEquipments>,
            loader: () => fetch("http://localhost:5000/home-equipments"),
          },
        ],
      },
      {
        path: "all-sports-equipments",
        element: <AllSportsEquipment></AllSportsEquipment>,
        loader: () => fetch("http://localhost:5000/equipments"),
      },
      {
        path: "add-equipment",
        element: (
          <PrivateRout>
            <AddEquipment></AddEquipment>
          </PrivateRout>
        ),
      },
      {
        path: "my-equipments",
        element: (
          <PrivateRout>
            <MyEquipment />
          </PrivateRout>
        ),
      },
      {
        path: "/my-equipments/update/:id",
        element: (
          <PrivateRout>
            <UpdateMyEquipment></UpdateMyEquipment>
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/my-equipments/update/${params.id}`),
      },
      {
        path: "/all-sports-equipments/details/:id",
        element: (
          <PrivateRout>
            <EquipmentDetails />
          </PrivateRout>
        ),
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/all-sports-equipments/details/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
