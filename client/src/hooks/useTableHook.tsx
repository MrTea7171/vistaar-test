import { debounce } from 'lodash'
import React, { useCallback, useEffect, useState } from 'react'

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

    const setTableData = useCallback(
        async (currentPage, searchQuery) => {
            const tableData = await fetchData(currentPage, searchQuery)
            setRowData(tableData.rows)
            setTotalPages(tableData.totalPages)
        },
        [fetchData]
    )

    useEffect(() => {
        setTableData(currentPage, searchQuery)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    useEffect(() => {
        setTableData(1, searchQuery)
    }, [searchQuery, setTableData])

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
