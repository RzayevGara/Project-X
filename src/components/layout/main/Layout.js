import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/main/Header";
import Footer from "../footer/Footer";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet className="outlet" />
      <Footer />
    </div>
  );
}

export default Layout;
