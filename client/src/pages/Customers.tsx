import Table from '../component/Table'
import { CustomerTableColumns } from '../constants/CustomerCol'
import { fetchCustomerData } from '../services/customer.services'

const App = () => {
    return (
        <Table
            fetchData={fetchCustomerData}
            tableHeading="Customer Details"
            tableColumns={CustomerTableColumns}
            searchPlaceholder="Search by Customer Name"
        />
    )
}

export default App
