import React from "react";
import { Outlet } from "react-router-dom";
import MainSidebar from '../../components/main-sidebar/MainSidebar'

import "./RootLayout.css";
import { Box } from "@material-ui/core";

const RootLayout = () => {
  return (
    <Box className="rootLayout">
      <MainSidebar />
      <main className="content">
        <Outlet />
      </main>
    </Box>
  );
};

export default RootLayout;
