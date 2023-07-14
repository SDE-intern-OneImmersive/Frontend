import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'activeVersion', headerName: 'Active Version', width: 150 },
    { field: 'activeInstances', headerName: 'Active Instances', width: 150 },
    { field: 'overprovisioning', headerName: 'Overprovisioning', width: 150 },
    { field: 'created', headerName: 'Created', width: 150 },
    { field: 'lastupdate', headerName: 'Last Updated', width: 150 },
];

const rows = [
    {id: 0, name: 'Maya_verse', status: 'Awaiting Version', activeVersion: '-', activeInstances:'0',overprovisioning: '0', created: "1 year ago", lastupdate:'1 month ago'},
    {id: 1, name: 'Meta Human', status: 'Active', activeVersion: 'version 1', activeInstances:'0',overprovisioning: '0', created: "1 month ago", lastupdate:'1 week ago'},
];

export default function AppDataTable() {
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
}
