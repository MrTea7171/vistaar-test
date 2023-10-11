import { ColDef, GroupCellRendererParams } from 'ag-grid-community'
import { Link } from 'react-router-dom'

export const CustomerTableColumns: ColDef[] = [
    { field: 'name', flex: 1 },
    { field: 'address', flex: 1 },
    {
        field: 'accounts',
        flex: 1,
        cellRenderer: (params: GroupCellRendererParams) => {
            const accountValues: number[] = params.value
            return accountValues.map((account, index) => (
                <div
                    key={account}
                    style={{ display: 'inline-block', margin: '5px' }}
                >
                    <Link to={`/transactions/${account}`} key={index}>
                        {account}
                    </Link>
                </div>
            ))
        },
    },
]
