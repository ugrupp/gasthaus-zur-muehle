import classNames from "classnames";
import React from "react";
import Footer from "../components/footer";
import OverlayMenu from "../components/overlay-menu";
import Topbar from "../components/topbar";
import staticData from "../data/static.json";

interface LayoutProps {
  id?: string;
  staticData: typeof staticData;
}

const Layout: React.FC<LayoutProps> = ({ id = "", staticData, children }) => {
  const renderFooter = id !== "404" && id !== "500";

  return (
    <div>
      <Topbar data={staticData.topbar} />
      <OverlayMenu />

      <main
        className={classNames({
          "mb-60 md:mb-80 lg:mb-112": renderFooter,
        })}
      >
        {children}
      </main>

      {renderFooter && <Footer data={staticData.footer} />}
    </div>
  );
};

export default Layout;
