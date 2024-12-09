import { Outlet } from "react-router-dom";
import HomeEquipmentsCategory from "../components/HomeEquipmentsCategory";

const Home = () => {
  return (
    <div>
      <div></div>
      <div className="flex flex-col justify-center items-center my-16 gap-10">
        <HomeEquipmentsCategory></HomeEquipmentsCategory>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
