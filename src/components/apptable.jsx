import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { Grid } from '@mui/material';
import axios from 'axios';

export default function AppDataTable() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    // Fetch data from the backend API
    axios
      .get('http://localhost:5000/test')
      .then((response) => {
        // Modify the data to include the "id" property for each row
        const modifiedData = response.data.map((row) => ({
          ...row,
          id: row._id, // Use the "_id" property as the "id"
        }));
        setData(modifiedData); // Set the modified data to the state
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to fetch data from the server.');
      });
  }, []);

  // Custom click handler for the links in the DataGrid
  const handleLinkClick = (event, url) => {
    event.preventDefault();
    window.open(url, '_blank');
  };

  // Custom click handler for the delete button
  const handleDeleteClick = (id,name) => {
    
    axios
      .delete(`http://localhost:5000/test/${id}`,{
        params: { name: name }
      })
      .then((response) => {

        setData((prevData) => prevData.filter((row) => row.id !== id));
        alert('Entry deleted successfully!'+ id + name);
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to delete the entry.');
      });
  };

  // Define the columns for the DataGrid, including the delete button
  const columns = [
<<<<<<< HEAD
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'Registry', headerName: 'Registry', width: 200 },
    { field: 'Link', headerName: 'URL', width: 700 },
    {
      field: 'delete',
      headerName: 'Delete',
      width: 100,
      renderCell: (params) => (
        <Button variant="outlined" onClick={() => handleDeleteClick(params.row.id,params.row.name)}>
          Delete
        </Button>
      ),
    },
=======
    {
      field: 'name', headerName: 'Name', width: 200,
      renderCell: (params) => (
        <Link to={`/applications/${data.id}`} >
          {params.value}
        </Link>
      ),
    },
    { field: 'Registry', headerName: 'Registry', width: 200 },
    { field: 'Link', headerName: 'URL', width: 700, },
>>>>>>> 14d54f3b9a4d253291253a7170721f88d3a0c5e0
  ];

  return (
    <>
      <Stack direction="row" spacing={2}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <TextField variant='outlined' label='Search' />
          </Grid>
          <Grid item xs={4}>
            <Link to="/applications/create">
              <Button variant='contained'>Create Application</Button>
            </Link>
          </Grid>
        </Grid>
      </Stack>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={data} columns={columns} pageSize={5} />
      </div>
    </>
  );
}
