import { Outlet } from "react-router";
import Navbar from "../header/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">

        <Navbar />
        <Outlet/>

    </div>
  );
};

export default Layout;
