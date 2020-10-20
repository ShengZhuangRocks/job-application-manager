import React from "react";
import Navbar from "./Navbar";
import Wraper from "./wraper";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Wraper>{children}</Wraper>
    </>
  );
};

export default Layout;
