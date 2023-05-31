import React from "react";

import "./CodeEditor.css";

import {
  Paper,
  Tabs,
  Tab,
  List,
  ListItem,
  ListItemText,
  Divider,
  makeStyles,
  Box,
} from "@material-ui/core";

import { FaRegQuestionCircle } from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";
import { TbNumber3 } from "react-icons/tb";

import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    backgroundColor: "#2E3A46",
    top: 56,
    paddingRight: -10,
    marginRight: -10,
  },
  Divider: {
    borderBottom: "0.2px solid rgb(86, 90, 93, .8)",
  },
}));

const customStyle = {
  ...atomOneDark,
  hljs: {
    ...atomOneDark["hljs"],
    background: "#2E3A46",
  },
};

const CodeEditor = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const codeString = `1   --learn more on https://docs.project.co/guides/tables/
2
3   --js type('table')
4
5   SELECT country  as      country,
6       device_type as    device_type,
7       SUM(revenue) as   revenue,
8       SUM(sessions) as  sessions,
9       SUM(pageviews) as pageviews,
10   FROM my_table
11   WHERE country='FRANCE'
12   GROUP BY 1, 2`;

  return (
    <Box className="editorWrapper">
      <Box className="editor">
        <Box className="editorHeader">
          <p style={{ color: "#BDC6CF" }}>
            definitions/1_simple_examples/dataset2_with_ref.sql
          </p>

          <button className="editorSave">Save</button>
        </Box>
        <Box style={{ display: "flex" }}>
          
          <SyntaxHighlighter language="sql" style={customStyle}>
            {codeString}
          </SyntaxHighlighter>
        </Box>
      </Box>

      {/* Right Side Bar */}
      <Box className="rightSideBar">
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
            <Box
              className="rightSidebar2"
              style={{ backgroundColor: "#2E3A46", paddingLeft: 0 }}
            >
              <Box className="bage1" style={{ backgroundColor: "#528D99" }}>
                table
              </Box>
              <Box style={{ color: "#B5BFC7" }}>dataset_2_with_ref</Box>
              <Box
                style={{
                  color: "#B5BFC7",
                  fontSize: 20,
                  marginTop: -7,
                  marginLeft: 65,
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
              </Box>
            </Box>
          </ListItem>
          <Divider classes={{ root: classes.Divider }} />
          <ListItem button Divider>
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
          <Divider classes={{ root: classes.Divider }} />
          <ListItem button>
            <ListItemText primary="Compiled" className="omicPrimaryTextColor" />
            <MdExpandMore
              size={20}
              style={{ color: "#626E7A", marginLeft: 10 }}
            />
          </ListItem>
          <Divider classes={{ root: classes.Divider }} />
          <ListItem button>
            <ListItemText primary="Query" className="omicPrimaryTextColor" />
            <MdExpandMore
              size={20}
              style={{ color: "#626E7A", marginLeft: 10 }}
            />
          </ListItem>
          <Box style={{ marginLeft: 20, marginTop: 20 }}>
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
          </Box>
        </List>
      </Box>
    </Box>
  );
};

export default CodeEditor;
