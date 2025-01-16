import { Outlet } from "react-router";
import Footer from "../componants/shared/Footer";
import Navbar from "../componants/shared/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
