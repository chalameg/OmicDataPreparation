import "./InnerSidebar.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { AiFillFolder } from "react-icons/ai";
import React from "react";
import PropTypes from "prop-types";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";

import "@mui/lab/TreeItem";

function TransitionComponent(props) {
  const style = useSpring({
    from: { opacity: 0, transform: "translate3d(20px,0,0)" },
    to: {
      opacity: props.in ? 1 : 0,
      transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
    },
  });

  return (
    <animated.div style={style}>
      <Collapse {...props} />
    </animated.div>
  );
}

TransitionComponent.propTypes = {
  in: PropTypes.bool,
};

const InnerSidebar = () => {
  return (
    <div className="leftSidebar">
      <div class="vl"></div>
      <div class="v2"></div>
      <div class="v3"></div>
      <div class="v4"></div>
      <h2
        style={{
          color: "white",
          fontStyle: "bold",
          margin: 15,
          marginBottom: 5,
          padding: 20,
          paddingLeft: 15,
        }}
      >
        Files
      </h2>
      <div className="sidebarWrapper">
        <div className="bage1">config</div>
        <div className="omicPrimaryTextColor">dataform</div>
      </div>
      <div className="sidebarWrapper">
        <div className="bage1">config</div>
        <div className="omicPrimaryTextColor">package-lock</div>
      </div>
      <div className="sidebarWrapper">
        <div className="bage1">config</div>
        <div className="omicPrimaryTextColor">package</div>
      </div>

      <div className="lists">
        <div>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </div>
        <div>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </div>
        <div className="omicPrimaryTextColor"> models</div>
      </div>
      <div className="list2">
        <div>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </div>
        <div>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </div>
        <div className="omicPrimaryTextColor"> 1_simple_examples</div>
      </div>
      <div
        className="sidebarWrapper3"
        style={{ backgroundColor: "#2E3A46", padding: 5, paddingLeft: 0 }}
      >
        <div className="bage1 bgClass" style={{ backgroundColor: "#8CA261" }}>
          SQL
        </div>
        <div className="omicPrimaryTextColor">dataset_1</div>
        <div style={{ color: "#B5BFC7", fontSize: 20, marginTop: -7 }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
        </div>
      </div>
      <div className="sidebarWrapper2">
        <div className="bage1" style={{ backgroundColor: "#8CA261" }}>
          SQL
        </div>
        <div className="omicPrimaryTextColor">dataset_2_with_ref </div>
      </div>
      <div className="list2">
        <div>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </div>
        <div>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </div>
        <div className="omicPrimaryTextColor"> 2_advanced_examples</div>
      </div>
      <div className="sidebarWrapper2">
        <div className="bage1" style={{ backgroundColor: "#8CA261" }}>
          SQL
        </div>
        <div className="omicPrimaryTextColor">dataset_3 increa...</div>
      </div>
      <div className="sidebarWrapper2">
        <div
          className="bage1"
          style={{ backgroundColor: "#E8D44D", color: "black" }}
        >
          JS
        </div>
        <div className="omicPrimaryTextColor">dataset_4_increase...</div>
      </div>
      <div className="list2">
        <div>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </div>
        <div>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </div>
        <div className="omicPrimaryTextColor"> 3_operations_and_as</div>
      </div>
      <div className="sidebarWrapper2">
        <div className="bage1" style={{ backgroundColor: "#518E9B" }}>
          ops
        </div>
        <div className="omicPrimaryTextColor">grant_assess</div>
      </div>
      <div className="sidebarWrapper2">
        <div
          className="bage1"
          style={{ backgroundColor: "#C48A69", color: "white" }}
        >
          assert
        </div>
        <div className="omicPrimaryTextColor">simple_assertion...</div>
      </div>

      <div className="lists">
        <div>
          {" "}
          <ExpandMoreIcon className="omicPrimaryIconColor" />
        </div>
        <div>
          <AiFillFolder className="omicPrimaryIconColor" size={25} />
        </div>
        <div style={{ color: "#B5BFC7", marginBottom: 95.3 }}> models_2</div>
      </div>
    </div>
  );
};

export default InnerSidebar;
