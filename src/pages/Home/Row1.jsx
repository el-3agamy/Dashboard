import { Box, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
// import TtyOutlinedIcon from '@mui/icons-material/TtyOutlined';
import RealEstateAgentOutlinedIcon from '@mui/icons-material/RealEstateAgentOutlined';
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
import TrafficOutlinedIcon from '@mui/icons-material/TrafficOutlined';
import HomePieChart from './HomePieChart';
const Row1 = () => {
    return (
        <Stack direction={"row"} gap={2} justifyContent={"space-between"} sx={{maxWidth:"97%"}}>
            <Paper sx={{padding : "15px" , minWidth:"25%"}}>
                <Stack  direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"} >
                    <Box component={"div"} sx={{display:"flex" , flexDirection:"column" , gap:1}}>
                        <Typography><EmailOutlinedIcon color='success' /></Typography>
                        <Typography>12,921 </Typography>
                        <Typography>Emails Sent</Typography>
                    </Box>
                    <Box component={"div"} sx={{display:"flex" , flexDirection:"column" , gap:0 , alignItems:"center"}}>
                        <HomePieChart />
                        <Typography>+23%</Typography>
                    </Box>
                </Stack>
            </Paper>
            <Paper sx={{padding : "15px" , minWidth:"25%"}}>
                <Stack  direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"} >
                    <Box component={"div"} sx={{display:"flex" , flexDirection:"column" , gap:1}}>
                    <Typography><RealEstateAgentOutlinedIcon  color='info'/></Typography>

                        <Typography>Sales Obtained</Typography>
                        <Typography>450,362</Typography>
                    </Box>
                    <Box component={"div"} sx={{display:"flex" , flexDirection:"column" , gap:0 , alignItems:"center"}}>
                    <HomePieChart />
                        <Typography>+62.2%</Typography>
                    </Box>
                </Stack>
            </Paper>
            <Paper sx={{padding : "15px" , minWidth:"25%"}}>
                <Stack  direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"} >
                    <Box component={"div"} sx={{display:"flex" , flexDirection:"column" , gap:1}}>
                    <Typography><EmojiPeopleOutlinedIcon color='success'/></Typography>

                        <Typography>New CLients</Typography>
                        <Typography>321,982</Typography>

                    </Box>
                    <Box component={"div"} sx={{display:"flex" , flexDirection:"column" , gap:0 , alignItems:"center"}}>
                    <HomePieChart />

                        <Typography>+32.4%</Typography>
                    </Box>
                </Stack>
            </Paper>
            <Paper sx={{padding : "15px" , minWidth:"25%" }}>
                <Stack  direction={"row"} justifyContent={"space-between"} flexWrap={"wrap"} >
                    <Box component={"div"} sx={{display:"flex" , flexDirection:"column" , gap:1}}>
                    <Typography><TrafficOutlinedIcon color='info' /></Typography>
                        <Typography>Trafic Resived</Typography>
                        <Typography>1,523,012</Typography>

                    </Box>
                    <Box component={"div"} sx={{display:"flex" , flexDirection:"column" , gap:0 , alignItems : "center"}}>
                    <HomePieChart />

                        <Typography>+51%</Typography>
                    </Box>
                </Stack>
            </Paper>
        </Stack>
    )
}

export default Row1