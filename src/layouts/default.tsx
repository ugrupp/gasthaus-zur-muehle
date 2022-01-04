import React from "react";

interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header>Topbar</header>

      <main>{children}</main>
    </div>
  );
};

export default Layout;
