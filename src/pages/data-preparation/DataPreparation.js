import "./DataPreparation.css";

import InnerSidebar from "../../components/inner-sidebar/InnerSidebar";
import CodeEditor from "../../components/code-editor/CodeEditor";
import QueryResultsTable from "../../components/query-results-table/QueryResultsTable";
import Header from "../../components/header/Header";
import { Box } from "@material-ui/core";

const DataPreparation = () => {
  return (
    <Box className="dataPreparation">
      <Header />
      <InnerSidebar />
      <CodeEditor />
      <QueryResultsTable />
    </Box>
  );
};

export default DataPreparation;
