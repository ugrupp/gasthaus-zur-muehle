import React from "react";
import Footer from "../components/footer";
import OverlayMenu from "../components/overlay-menu";
import Topbar from "../components/topbar";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Topbar />
      <OverlayMenu />

      <main className="mb-60 md:mb-80 lg:mb-112">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
