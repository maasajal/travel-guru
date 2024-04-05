import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-3 md:px-5 font-poppins">
        <Outlet />
      </div>
    </>
  );
};
export default Root;
