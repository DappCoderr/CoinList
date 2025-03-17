import Navbar from "../component/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";

export const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

export const AdminLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
