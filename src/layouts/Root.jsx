import { Outlet } from "react-router-dom";
import bgImage from "../assets/images/Rectangle 1.png";
import Header from "../components/Header/Header";

const Root = () => {
  return (
    <div
      className="min-h-screen bg-center min-w-full bg-no-repeat bg-cover"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="font-montserrat">
        <Header />
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
