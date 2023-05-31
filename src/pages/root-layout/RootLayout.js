import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/main-navigation/MainNavigation";
import MainSidebar from '../../components/main-sidebar/MainSidebar'

import "./RootLayout.css";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <MainNavigation />
      <MainSidebar />
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
