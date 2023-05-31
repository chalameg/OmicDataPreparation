import "./InnerSidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AiFillFolder } from "react-icons/ai";
import React from "react";

import "@mui/lab/TreeItem";
import { Box } from "@material-ui/core";
import { NavLink } from "react-router-dom";

const InnerSidebar = () => {
  return (
    <Box className="leftSidebar">
      <h2> Files </h2>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active1" : "inactive")}
      >
        <Box className="sidebarWrapper">
          <Box className="bage1">config</Box>
          <Box className="omicPrimaryTextColor">dataform</Box>
        </Box>
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active1" : "inactive")}
      >
        <Box className="sidebarWrapper">
          <Box className="bage1">config</Box>
          <Box className="omicPrimaryTextColor">package-lock</Box>
        </Box>
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active1" : "inactive")}
      >
        <Box className="sidebarWrapper">
          <Box className="bage1">config</Box>
          <Box className="omicPrimaryTextColor">package</Box>
        </Box>
      </NavLink>

      <Box className="lists">
        <Box>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </Box>
        <Box>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </Box>

        <Box className="omicPrimaryTextColor"> models</Box>
      </Box>
      <Box className="list2">
        <Box>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </Box>
        <Box>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </Box>
        <Box className="omicPrimaryTextColor"> 1_simple_examples</Box>
      </Box>
      <Box
        className="sidebarWrapper3"
        style={{ backgroundColor: "#2E3A46", padding: 5, paddingLeft: 0 }}
      >
        <Box className="bage1 bgClass" style={{ backgroundColor: "#8CA261" }}>
          SQL
        </Box>
        <Box className="omicPrimaryTextColor">dataset_1</Box>
        <Box style={{ color: "#B5BFC7", fontSize: 20, marginTop: -7 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
        </Box>
      </Box>
      <Box className="sidebarWrapper2">
        <Box className="bage1" style={{ backgroundColor: "#8CA261" }}>
          SQL
        </Box>
        <Box className="omicPrimaryTextColor">dataset_2_with_ref </Box>
      </Box>
      <Box className="list2">
        <Box>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </Box>
        <Box>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </Box>
        <Box className="omicPrimaryTextColor"> 2_advanced_examples</Box>
      </Box>
      <Box className="sidebarWrapper2">
        <Box className="bage1" style={{ backgroundColor: "#8CA261" }}>
          SQL
        </Box>
        <Box className="omicPrimaryTextColor">dataset_3 increa...</Box>
      </Box>
      <Box className="sidebarWrapper2">
        <Box
          className="bage1"
          style={{ backgroundColor: "#E8D44D", color: "black" }}
        >
          JS
        </Box>
        <Box className="omicPrimaryTextColor">dataset_4_increase...</Box>
      </Box>
      <Box className="list2">
        <Box>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </Box>
        <Box>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </Box>
        <Box className="omicPrimaryTextColor"> 3_operations_and_as</Box>
      </Box>
      <Box className="sidebarWrapper2">
        <Box className="bage1" style={{ backgroundColor: "#518E9B" }}>
          ops
        </Box>
        <Box className="omicPrimaryTextColor">grant_assess</Box>
      </Box>
      <Box className="sidebarWrapper2">
        <Box
          className="bage1"
          style={{ backgroundColor: "#C48A69", color: "white" }}
        >
          assert
        </Box>
        <Box className="omicPrimaryTextColor">simple_assertion...</Box>
      </Box>

      <Box className="lists">
        <Box>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </Box>
        <Box>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </Box>
        <Box style={{ color: "#B5BFC7", marginBottom: 95.3 }}> models_2</Box>
      </Box>
    </Box>
  );
};

export default InnerSidebar;
