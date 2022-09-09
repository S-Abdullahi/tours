import { Typography, Box } from '@mui/material'
import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import CircularProgress from '@mui/material/CircularProgress'


const Loading = () => {
    return (
        <>
            <Box sx={{ width: 300, display: 'flex', justifyContent:'center',mt: '40vh' }}>
                    <CircularProgress sx={{color:"#a9d36c"}}/>
            </Box>
            
        </>
    )
}

export default Loading