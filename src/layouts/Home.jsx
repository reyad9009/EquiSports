import { Outlet } from "react-router-dom";
import HomeEquipmentsCategory from "../components/HomeEquipmentsCategory";
import ImageSlider from "../components/ImageSlider";
import Blog from "../components/Blog";
import Support from "../components/Support";

const Home = () => {
  return (
    <div>
      <div>
        <ImageSlider></ImageSlider>
      </div>
      <div className="text-center">
      </div>
      <div className="flex flex-col justify-center items-center my-16 gap-10">
        <HomeEquipmentsCategory></HomeEquipmentsCategory>
        <Support></Support>
        <Outlet />
        <Blog></Blog>
      </div>
      
    </div>
  );
};

export default Home;
