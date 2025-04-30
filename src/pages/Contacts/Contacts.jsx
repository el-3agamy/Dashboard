import React from 'react'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import rows from '../../Data/TeamData';
import {columns} from '../../Data/TeamData';
import { Toolbar, ToolbarButton } from '@mui/x-data-grid';



const Contacts = () => {
 
  return (
    <Box sx={{ height: 500, width: '100%' }}>
    <DataGrid
      rows={rows}
      columns={columns}

        slots={{ toolbar: GridToolbar , }}
        
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 7,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  )
}

export default Contacts