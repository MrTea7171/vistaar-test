import { AgGridReact } from 'ag-grid-react'
import './Table.css'
import { ColDef } from 'ag-grid-community'
import useTableHook from '../../hooks/useTableHook'

const Table = ({
    fetchData,
    tableHeading,
    tableColumns,
    searchPlaceholder,
}: {
    fetchData: (
        currentPage: number,
        searchQuery: string
    ) => Promise<{ rows: { key: string }[]; totalPages: number }>
    tableHeading: string
    tableColumns: ColDef[]
    searchPlaceholder: string
}) => {
    const {
        rowData,
        totalPages,
        currentPage,
        handlePageChange,
        handleSearchChange,
    } = useTableHook({
        fetchData,
    })

    return (
        <div>
            <h1 className="page--heading">{tableHeading}</h1>
            <div className="ag-theme-alpine page--table">
                <input
                    className="search-box"
                    type="text"
                    placeholder={searchPlaceholder}
                    onChange={handleSearchChange}
                />
                <AgGridReact
                    rowData={rowData}
                    columnDefs={tableColumns}
                    domLayout="autoHeight"
                />
                <div className="pagination">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <span>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Table
