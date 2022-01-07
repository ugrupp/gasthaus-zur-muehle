import classNames from "classnames";
import React from "react";
import Footer from "../components/footer";
import OverlayMenu from "../components/overlay-menu";
import Topbar from "../components/topbar";

interface LayoutProps {
  id?: string;
}

const Layout: React.FC<LayoutProps> = ({ id = "", children }) => {
  const renderFooter = id !== "404";

  return (
    <div>
      <Topbar />
      <OverlayMenu />

      <main
        className={classNames({
          "mb-60 md:mb-80 lg:mb-112": renderFooter,
        })}
      >
        {children}
      </main>

      {renderFooter && <Footer />}
    </div>
  );
};

export default Layout;
