import React from "react";
import "./MainSidebar.css";

import { FiSearch } from "react-icons/fi";
import { ImClock } from "react-icons/im";
import { CgNotes } from "react-icons/cg";

import { AiFillAlipayCircle } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import { CiSliderHorizontal } from "react-icons/ci";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { BsFillDatabaseFill } from "react-icons/bs";
import Avatar from "@material-ui/core/Avatar";
import profilePic from "../../assets/profilePic.jpg";
import logo from "../../assets/logo.jpg";
import { TbFidgetSpinner } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { Box } from "@material-ui/core";

const MainSidebar = () => {
  return (
    <Box className="mainSidebar">
      <Box className="icons">
        <NavLink to="/">
        <img
          src={logo}
          style={{
            color: "white",
            marginBottom: 20,
            borderRadius: "50%",
            height: 30,
            widht: 40,
          }}
          alt="logo"
        />
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "inactive")}
        >
          <PlayArrowIcon
            style={{
              borderRadius: 5,
            }}
            size={30}
          />
        </NavLink>

        <hr />

        <NavLink
          to="/datasets"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <AiFillAlipayCircle
            style={{ marginBottom: 22 }}
            size={25}
            className="omicPrimaryIconColor"
          />
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <FiSearch
            style={{ marginBottom: 22 }}
            size={25}
            className="omicPrimaryIconColor"
          />
        </NavLink>

        <hr style={{ color: "#484545", width: 22 }} />

        <TbFidgetSpinner
          style={{ color: "#fff", margin: '22px  0' }}
          size={25}
        />
        <ImClock
          style={{ marginBottom: 22 }}
          size={25}
          className="omicPrimaryIconColor"
        />
        <CgNotes
          style={{ marginBottom: 22 }}
          size={25}
          className="omicPrimaryIconColor"
        />
        <BsFillDatabaseFill
          style={{ marginBottom: 22 }}
          size={25}
          className="omicPrimaryIconColor"
        />
        <hr style={{ color: "#484545", width: 20 }} />
        <BiChevronRight
          style={{ marginBottom: 6, marginTop: 20 }}
          size={35}
          className="omicPrimaryIconColor"
        />
        <CiSliderHorizontal
          style={{ marginBottom: 22, marginTop: 100 }}
          size={35}
          className="omicPrimaryIconColor"
        />
        <Avatar src={profilePic} style={{ marginBottom: 36 }}></Avatar>
      </Box>
    </Box>
  );
};

export default MainSidebar;
