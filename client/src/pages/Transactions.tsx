import { useCallback } from 'react'
import Table from '../component/Table'
import { AccountColumn } from '../constants/AccountCol'
import { useParams } from 'react-router-dom'
import { fetchAccountData } from '../services/customer.services'

const Transactions = () => {
    const { accountId } = useParams()

    const fetchTransactionsData = useCallback(
        (currentPage: number, searchQuery: string) => {
            return fetchAccountData(accountId ?? '', currentPage, searchQuery)
        },
        [accountId]
    )

    return (
        <Table
            fetchData={fetchTransactionsData}
            tableHeading="Account Transactions"
            searchPlaceholder="Search by Transaction Code"
            tableColumns={AccountColumn}
        />
    )
}

export default Transactions
