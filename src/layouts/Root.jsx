import { Outlet } from "react-router-dom";
import bgImage from "../assets/images/Rectangle 1.png";

const Root = () => {
  return (
    <div
      className="min-h-screen bg-center min-w-full bg-no-repeat bg-cover"
      // style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="font-poppins">
        <Outlet />
      </div>
    </div>
  );
};
export default Root;
