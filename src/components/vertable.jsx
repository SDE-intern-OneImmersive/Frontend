import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import axios from 'axios';

const NameLink = (params) => {
    const name = params.value;
    return <Link to={`/name/${name}`}>{name}</Link>;
  };
  
const columns = [
  { field: 'name', headerName: 'Name', width: 200, renderCell: NameLink }, // Use the NameLink component for rendering
  // Other columns...
];



export default function VerDataTable() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    axios
      .get('http://localhost:5000/test')
      .then((response) => {
        const modifiedData = response.data.map((row) => ({
          ...row,
          id: row._id,
        }));
        setData(modifiedData);
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to fetch data from the server.');
      });
  }, []);

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField variant='outlined' label='Search' />
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </Stack>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </div>
    </>
  );
}
