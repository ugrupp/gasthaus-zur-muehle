import React from "react";
import Topbar from "../components/topbar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Topbar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
