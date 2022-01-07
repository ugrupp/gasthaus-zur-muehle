import React from "react";
import Footer from "../components/footer";
import Topbar from "../components/topbar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Topbar />

      <main className="mb-60 md:mb-80 xl:mb-112">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
