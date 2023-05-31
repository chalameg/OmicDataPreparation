import React from "react";

import {
  RiLayoutLeft2Line,
  RiLayoutBottom2Line,
  RiLayoutRight2Line,
} from "react-icons/ri";
import { RxSlider } from "react-icons/rx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

import "./Header.css";
import { Box } from "@material-ui/core";

const Header = () => {
  return (
    <Box className="headerContainer">
      <Box className="header">
        <Box
          style={{
            marginLeft: 100,
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            alignItems: "center",
          }}
        >
          <p style={{ color: "#6E7982" }}>Project Name</p>
          <Box style={{ marginTop: "8px", color: "#727E8A" }}>
            <ExpandMoreIcon />
          </Box>
        </Box>

        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "5px",
            alignItems: "center",
            border: "0.2px solid rgb(86, 90, 93, .8)",
            borderRadius: "10px",
          }}
        >
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "5px",
              alignItems: "center",
              padding: "0px 0px 0px 20px",
            }}
          >
            <Box className="secondItem">
              <p style={{ color: "#9DA4A8", margin: 0 }}>Development</p>
            </Box>
            <Box style={{ marginTop: "8px", color: "#727E8A" }}>
              <ExpandMoreIcon />
            </Box>
          </Box>
          <Box
            style={{
              color: "#ccc",
              fontSize: "20px",
              borderLeft: "0.2px solid rgb(86, 90, 93, .8)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <span
              style={{
                marginBottom: "8px",
                padding: "0px 10px 0px 10px",
              }}
            >
              ..
            </span>
          </Box>
        </Box>

          <Button
            variant="contained"
            color="primary"
            style={{ textTransform: "capitalize", borderRadius: 8 }}
            startIcon={<RxSlider />}
          >
            Commit (2 files)
          </Button>
        
      </Box>
    
      <Box className="layout">
        <RiLayoutLeft2Line size={25} color="#6A7682"/>
        
        <RiLayoutBottom2Line size={25} color="#6A7682"/>
      
        <RiLayoutRight2Line size={25} color="#6A7682"/>
      </Box>
    </Box>
  );
};

export default Header;
