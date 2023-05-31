import "./QueryResultsTable.css";
import { RiFileSearchLine } from "react-icons/ri";
import { TbSchema } from "react-icons/tb";
import { MdRefresh } from "react-icons/md";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import TreeView from "@mui/lab/TreeView";
import TreeItem, { treeItemClasses } from "@mui/lab/TreeItem";
import Collapse from "@mui/material/Collapse";
import { useSpring, animated } from "@react-spring/web";
import { BsEye } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

function TransitionComponent(props) {
  const style = useSpring({
    from: {
      opacity: 0,
      transform: "translate3d(20px,0,0)",
    },
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

const StyledTreeItem = styled((props) => (
  <TreeItem {...props} TransitionComponent={TransitionComponent} />
))(({ theme }) => ({
  [`& .${treeItemClasses.iconContainer}`]: {
    "& .close": {
      opacity: 0.3,
    },
  },
  [`& .${treeItemClasses.group}`]: {
    marginLeft: 15,
    paddingLeft: 18,
    borderLeft: "0.2px solid rgb(86, 90, 93, .8)",
  },
}));

const QueryResultsTable = () => {
  return (
    <div className="omicTable">
      <div className="headerWrapper">
        <div className="tableHeader">
          <div>
            <RiFileSearchLine />
          </div>
          <div>Query results</div>
        </div>
        <div className="tableHeader2">
          <div>
            <TbSchema />
          </div>
          <div>Schemas</div>
        </div>
      </div>

      <div className="tableData">
        <div className="columnDataWrapper">
          <div className="leftColumn">
            <div className="leftColumnHeader">
              <div className="columnTitle" style={{ marginTop: -5 }}>
                {" "}
                Refresh
              </div>
              <div>
                <MdRefresh style={{ marginTop: 0 }} />
              </div>
            </div>
            <div className="columnData" style={{ display: "block" }}>
              <TreeView
                aria-label="customized"
                defaultExpanded={[""]}
                defaultCollapseIcon={<ExpandMoreIcon />}
                defaultExpandIcon={<ExpandMoreIcon />}
                defaultEndIcon={<BsEye />}
                sx={{
                  height: 190,
                  flexGrow: 1,
                  maxWidth: 400,
                  overflow: "hidden",
                  backgroundColor: "#24303C",
                  marginTop: -1,
                }}
              >
                <StyledTreeItem
                  nodeId=""
                  label="datafrom_demo"
                  className="omicTablePrimaryTextColor"
                >
                  <StyledTreeItem
                    nodeId="2"
                    label="dataset_1"
                    className="omicTablePrimaryTextColor"
                  />

                  <StyledTreeItem
                    nodeId="4"
                    label="dataset_5_from_script_builder"
                    style={{ color: "#CDD9DD", backgroundColor: "#2D3945" }}
                  />
                  <StyledTreeItem
                    nodeId="5"
                    label="dataset_3_incremental_date"
                    className="omicTablePrimaryTextColor"
                  />
                  <StyledTreeItem
                    nodeId="6"
                    label="dataset_4_incremental_snapshot"
                    className="omicTablePrimaryTextColor"
                  />
                  <StyledTreeItem
                    nodeId="7"
                    label="reporting_gb"
                    className="omicTablePrimaryTextColor"
                  />
                </StyledTreeItem>
                <StyledTreeItem
                  nodeId="1"
                  label="datafrom_set2"
                  className="omicTablePrimaryTextColor"
                >
                  <StyledTreeItem nodeId="10" label="dataset_1" />
                </StyledTreeItem>
              </TreeView>
            </div>
          </div>
          <div className="rightColumn">
            <div className="rightColumnHeader">
              <div className="bage1" style={{ backgroundColor: "#528D99" }}>
                view
              </div>
              <div className="omicPrimaryTextColor">datfrom_demo.dataset_1</div>
              <div style={{ color: "#57636F", marginLeft: 530 }}>
                <IoMdClose size={25} />
              </div>
            </div>
            <table className="myTable custom-table">
              <tbody>
                <tr>
                  <td>Field</td>
                  <td>Type</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>date</td>
                  <td>date</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>device_type</td>
                  <td>character varying</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>country</td>
                  <td>character varying</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>sessions</td>
                  <td>integer</td>
                </tr>
                <tr className="omicTablePrimaryTextColor">
                  <td>revenue</td>
                  <td>integer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QueryResultsTable;
