import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link, Outlet } from 'react-router-dom';

function Applications() {
    return (
        <div id="Application">
        <h1>Applications</h1>
        <Stack direction="row" spacing={2}>
            <Link to="/applications/create"><Button variant='contained'>Create Application</Button></Link>
        </Stack>
        <div id="app-details" style={{paddingTop:"5px"}}><Outlet /></div>
        </div>
    )
}

export default Applications;