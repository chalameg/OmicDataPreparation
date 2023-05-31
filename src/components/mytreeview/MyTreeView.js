import React from 'react';
import { styled } from '@mui/system';
import TreeView from '@mui/lab/TreeView';
import TreeItem from '@mui/lab/TreeItem';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// import FolderIcon from '@mui/icons-material/Folder';

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FolderIcon from "@material-ui/icons/Folder";

const StyledTreeView = styled(TreeView)({
  height: 240,
  flexGrow: 1,
  maxWidth: 400,
});

const MyTreeView = () => {
  return (
    <StyledTreeView
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="models">
        <TreeItem nodeId="2" label="1_simple_examples" />
        <TreeItem nodeId="3" label="dataset_1">
          <TreeItem
            nodeId="4"
            label={
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <FolderIcon sx={{ color: '#8CA261', marginRight: '0.5rem' }} />
                <span>SQL</span>
              </div>
            }
          />
          <TreeItem nodeId="5" label="dataset_1" />
          <div style={{ fontSize: '20px', marginTop: '-7px' }}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...
          </div>
        </TreeItem>
        <TreeItem nodeId="6" label="dataset_2_with_ref" />
        <TreeItem nodeId="7" label="2_advanced_examples">
          <TreeItem nodeId="8" label="nested_item_1" />
          <TreeItem nodeId="9" label="nested_item_2" />
        </TreeItem>
        <TreeItem nodeId="10" label="dataset_3 increa..." />
        <TreeItem nodeId="11" label="dataset_4_increase..." />
        <TreeItem nodeId="12" label="3_operations_and_as">
          <TreeItem nodeId="13" label="grant_assess" />
          <TreeItem nodeId="14" label="simple_assertion..." />
        </TreeItem>
      </TreeItem>
      <TreeItem nodeId="15" label="models_2" />
    </StyledTreeView>
  );
};

export default MyTreeView;
