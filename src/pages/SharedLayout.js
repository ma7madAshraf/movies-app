import React from "react";
import Header from "../components/Header";

import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
  return (
    <div className="layout">
      <Header />
      <Outlet />

      <Footer />
    </div>
  );
};

export default SharedLayout;
