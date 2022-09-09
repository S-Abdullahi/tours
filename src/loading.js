import { Typography, Box } from '@mui/material'
import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress'


const Loading = () => {
    return (
        <>
            <Box sx={{ width: 300, mt:'50vh', ml:'50vw'}}>
                    <CircularProgress sx={{color:"#a9d36c"}}/>
            </Box>
            
        </>
    )
}

export default Loading