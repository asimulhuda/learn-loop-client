import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <div className="lg:max-w-[1200px] lg:mx-auto mx-5">
        <Navbar />
      </div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
