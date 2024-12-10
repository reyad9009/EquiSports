import { Outlet } from "react-router-dom";
import HomeEquipmentsCategory from "../components/HomeEquipmentsCategory";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <div>
      <div>
        <ImageSlider></ImageSlider>
      </div>
      <div className="text-center">
        <h1>Trending Products</h1>
      </div>
      <div className="flex flex-col justify-center items-center my-16 gap-10">
        <HomeEquipmentsCategory></HomeEquipmentsCategory>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
