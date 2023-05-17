import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'userId',
    headerName: 'User Id',
    width: 150,
    editable: true,
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'body',
    headerName: 'Description',
    type: 'number',
    width: 300,
    editable: true,
  },
];



export default function Table({details}) {
  return (

    <Box sx={{ height: "100%", width: '100%' }}>
      <DataGrid
        rows={details}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
