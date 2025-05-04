import React from 'react'
import { Box, Stack  } from '@mui/material'
import BarChart from '../BarChart/BarChart'
import Calendar from '../Calendar/Calendar'
import Contacts from '../Contacts/Contacts'
import FAQ from '../FAQ/FAQ'
import Geography from '../Geography/Geography'
import Invoices from '../Invoices/Invoices'
import LineChart from '../LineChart/LineChart'
import PieChart from '../PieChart/PieChart'
import Profile from '../Profile/Profile'
import Team from '../Team/Team'
import Row1 from './Row1'
const Home = () => {
  return (
    <Box component={"div"} sx={{display : "flex" , flexDirection : "column" , rowGap: 10 , maxWidth:"100%"}} >
      <Row1 />
      <BarChart />
      <LineChart />
      <PieChart />

      <Calendar />
      {/* <Contacts /> */}
      {/* <FAQ /> */}
      <Geography />
      {/* <Invoices /> */}
      <Profile />
      {/* <Team /> */}

    </Box>
  )
}

export default Home