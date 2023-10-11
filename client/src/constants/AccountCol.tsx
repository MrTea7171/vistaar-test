import { ColDef } from 'ag-grid-community'

export const AccountColumn: ColDef[] = [
    {
        headerName: 'Date',
        field: 'date',
        flex: 1,
        valueFormatter: (params) =>
            new Date(params.value).toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
            }),
    },
    {
        headerName: 'Amount',
        field: 'amount',
        flex: 1,
        valueFormatter: (params) => {
            return params.value.toLocaleString('en-US', {
                style: 'currency',
                currency: 'INR',
            })
        },
    },
    { headerName: 'Symbol', field: 'symbol', flex: 1 },
    {
        headerName: 'Price',
        field: 'price',
        flex: 1,
        valueFormatter: (params) => {
            const price = Math.round(parseInt(params.value) * 100) / 100
            return price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'INR',
            })
        },
    },
    {
        headerName: 'Total',
        field: 'total',
        flex: 1,
        valueFormatter: (params) => {
            const total = Math.round(parseInt(params.value) * 100) / 100
            return total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'INR',
            })
        },
    },
    { headerName: 'Transaction Code', field: 'transaction_code', flex: 1 },
]
