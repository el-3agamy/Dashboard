import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import rows from '../../Data/TeamData';
import {columns} from '../../Data/TeamData';
import { Typography } from '@mui/material';


// console.log(columns.length);

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];
const Team = () => {
  return (
    <Box sx={{ height: 500, width: '100%' }}>
      <Typography sx={{color:"red" , textAlign : "center" , fontSize:24 ,  mb:"30px"}}>
                         Our Team
                      </Typography>
    <DataGrid
      rows={rows}
      columns={columns}
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

export default Team