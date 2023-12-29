import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import SideNav from "./SideNav";

const Layout = ({ children }) => {
  // function Layout() {
  return (
    <div>
      <Header />
      <SideNav />
      {/* Dynamic content */}
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
