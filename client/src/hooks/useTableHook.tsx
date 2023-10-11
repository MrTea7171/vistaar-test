import { debounce } from 'lodash'
import React, { useEffect, useState } from 'react'

const useTableHook = ({
    fetchData,
}: {
    fetchData: (
        currentPage: number,
        searchQuery: string
    ) => Promise<{
        rows: { key: string }[]
        totalPages: number
    }>
}) => {
    const [rowData, setRowData] = useState<{ key: string }[]>([])
    const [totalPages, setTotalPages] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        const setTableData = async () => {
            const tableData = await fetchData(currentPage, searchQuery)
            setRowData(tableData.rows)
            setTotalPages(tableData.totalPages)
        }
        setTableData()
    }, [currentPage, searchQuery, fetchData])

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage)
    }

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newSearchQuery = e.target.value
        debouncedFilterData(newSearchQuery)
    }

    const debouncedFilterData = debounce((query: string) => {
        setSearchQuery(query)
    }, 300)
    return {
        rowData,
        totalPages,
        currentPage,
        handlePageChange,
        handleSearchChange,
    }
}

export default useTableHook
