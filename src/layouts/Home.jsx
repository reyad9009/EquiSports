import { Outlet } from "react-router-dom";

const Home = () => {

  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
