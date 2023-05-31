import React from "react";

import "./DatasetEditor.css";

import {Paper, Tabs, Tab, List, ListItem, ListItemText, Divider, makeStyles} from "@material-ui/core";

import { FaRegQuestionCircle } from "react-icons/fa";
import {MdExpandMore} from 'react-icons/md'
import {TbNumber3} from 'react-icons/tb'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: "#2E3A46",
    top: 56,
    paddingRight: -10,
    marginRight: -10,
  },
  divider: {
    borderBottom: "0.2px solid rgb(86, 90, 93, .8)",
  },
}));

const DatasetEditor = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 
  return (
    <div className="editorWrapper">
      <div className="editor">
        <div className="editorHeader">
          <p style={{ color: "#BDC6CF" }}>
            definitions/1_simple_examples/dataset2_with_ref.sql
          </p>
          
          <button className="editorSave">Save</button>
        </div>
        <div className="editorBox">
          <div className="numbers">1</div>
          <div>-- learn more on https://docs.project.co/guides/tables/</div>
        </div>
        <div className="editorBox">
          <div className="numbers">2</div>
          <div></div>
        </div>
        <div className="editorBox">
          <div className="numbers">3</div>
          <div>
            -- js <span className="omicEditorColor1">type</span>('table')
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">4</div>
          <div></div>
        </div>
        <div className="editorBox">
          <div className="numbers">5</div>
          <div>
            <span className="omicEditorColor2">SELECT</span> country
            <span style={{ marginLeft: 86 }} className="omicEditorColor2">
              as
            </span>{" "}
            country
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">6</div>
          <div style={{ marginLeft: 55 }}>
            device_type
            <span style={{ marginLeft: 57 }} className="omicEditorColor2">
              as
            </span>{" "}
            device_type
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">7</div>
          <div style={{ marginLeft: 55 }}>
            <span style={{ color: "#80B579" }}>
              <span className="omicEditorColor3">sum</span>
            </span>
            (revenue)
            <span style={{ marginLeft: 43 }} className="omicEditorColor2">
              as
            </span>{" "}
            <span style={{ color: "#80B579" }}>
              <span className="omicEditorColor3">sum</span>
            </span>
            (revenue)
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">8</div>
          <div style={{ marginLeft: 55 }}>
            <span style={{ color: "#80B579" }}>
              <span className="omicEditorColor3">sum</span>
            </span>
            (sessions)
            <span style={{ marginLeft: 41 }} className="omicEditorColor2">
              as
            </span>{" "}
            sessions
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">9</div>
          <div style={{ marginLeft: 55 }}>
            <span className="omicEditorColor3">sum</span>(pageviews)
            <span style={{ marginLeft: 26 }} className="omicEditorColor2">
              as
            </span>{" "}
            pageviews
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">10</div>
          <div>
            <span className="omicEditorColor2">FROM</span> country &nbsp;
            <span style={{ color: "#7B6DB2" }}>
              {" "}
              <span className="omicEditorColor5">my_table</span>
            </span>
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">11</div>
          <div>
            <span className="omicEditorColor2">WHERE</span> country &nbsp;=
            <span className="omicEditorColor4"> FRANCE</span>
          </div>
        </div>
        <div className="editorBox">
          <div className="numbers">12</div>
          <div>
            <span className="omicEditorColor2">GROUP</span> BY &nbsp;=
            <span className="omicEditorColor6"> 1, 2</span>
          </div>
        </div>
      </div>
      {/* Right Side Bar */}
      <div className="rightSideBar">
        <Paper
          square
          style={{ height: 0, backgroundColor: "#2E3A46", border: "none" }}
        >
          <Tabs
            value={value}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#C5CDD3",
              },
            }}
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
            style={{
              height: 55.5,
              borderBottom: "0.2px solid rgb(86, 90, 93, .5)",
              marginLeft: 20,
            }}
          >
            <Tab
              label="Outline"
              style={{ color: "#FBFDFF", textTransform: "capitalize" }}
            />

            <Tab
              label="Documentation"
              style={{
                color: "#9099A2",
                textTransform: "capitalize",
              }}
            />
          </Tabs>
        </Paper>
        <List
          component="nav"
          className={classes.root}
          aria-label="mailbox folders"
        >
          <ListItem button style={{ color: "#AD9966" }}>
            <FaRegQuestionCircle style={{ marginRight: 10 }} />{" "}
            <ListItemText primary="No compilation issue" />
          </ListItem>
          <ListItem button style={{ color: "#AD9966" }}>
            <div
              className="rightSidebar2"
              style={{ backgroundColor: "#2E3A46", paddingLeft: 0 }}
            >
              <div className="bage1" style={{ backgroundColor: "#528D99" }}>
                table
              </div>
              <div style={{ color: "#B5BFC7" }}>dataset_2_with_ref</div>
              <div
                style={{
                  color: "#B5BFC7",
                  fontSize: 20,
                  marginTop: -7,
                  marginLeft: 65,
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
              </div>
            </div>
          </ListItem>
          <Divider classes={{ root: classes.divider }} />
          <ListItem button divider>
            <ListItemText
              primary="Dependencies"
              className="omicPrimaryTextColor"
            />
            <TbNumber3
              size={20}
              style={{ color: "white", backgroundColor: "#3D4854" }}
            />
            <MdExpandMore
              size={20}
              style={{ marginLeft: 10 }}
              className="omicPrimaryIconColor"
            />
          </ListItem>
          <Divider classes={{ root: classes.divider }} />
          <ListItem button>
            <ListItemText primary="Compiled" className="omicPrimaryTextColor" />
            <MdExpandMore
              size={20}
              style={{ color: "#626E7A", marginLeft: 10 }}
            />
          </ListItem>
          <Divider classes={{ root: classes.divider }} />
          <ListItem button>
            <ListItemText primary="Query" className="omicPrimaryTextColor" />
            <MdExpandMore
              size={20}
              style={{ color: "#626E7A", marginLeft: 10 }}
            />
          </ListItem>
          <div style={{ marginLeft: 20, marginTop: 20 }}>
            <button
              style={{
                padding: 10,
                backgroundColor: "#505D6B",
                border: "none",
                borderRadius: 10,
                paddingRight: 20,
                paddingLeft: 20,
                color: "#E4E9EA",
              }}
            >
              Execute query
            </button>
            <button
              style={{
                padding: 10,
                paddingRight: 20,
                paddingLeft: 20,
                marginLeft: 20,
                backgroundColor: "#3F51B5",
                border: "none",
                borderRadius: 10,
                color: "#E4E9EA",
              }}
            >
              Run this code
            </button>
          </div>
        </List>
      </div>
    </div>
  );
};

export default DatasetEditor;
