import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'name', headerName: 'Name', width: 70 },
    { field: 'status', headerName: 'Status', width: 110 },
    { field: 'app', headerName: 'Application', width: 150 },
    { field: 'platform', headerName: 'Platform', width: 90 },
    { field: 'http', headerName: 'HTTP Enabled', width: 130 },
    { field: 'turn', headerName: 'TURN Enabled', width: 130 },
    { field: 'date', headerName: 'Created', width: 140 },
    { field: 'lastupdate', headerName: 'Last Updated', width: 150 },
];

const rows = [
    {id: 0, name: 'v_9', status: 'Pending', app: 'Hello world', platform:'Linux', http: "True", turn:'True', date:"1 month ago", lastupdate: "1 week ago"},
    {id: 1, name: 'v_3', status: 'Inactive', app: 'Maaya_verse', platform:'Linux', http: "True", turn:'True', date:"2 month ago", lastupdate: "2 days ago"},
];

export default function VerDataTable() {
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
