import './DataPreparation.css'

import InnerSidebar from '../../components/inner-sidebar/InnerSidebar'
import DatasetEditor from '../../components/dataset-editor/DatasetEditor'
import QueryResultsTable from '../../components/query-results-table/QueryResultsTable'

const DataPreparation = () => {
    return <div className="dataPreparation">
        <InnerSidebar />
        <DatasetEditor />
        <QueryResultsTable />
    </div>;
}
 
export default DataPreparation;