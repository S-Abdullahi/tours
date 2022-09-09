import { Button, Typography } from '@mui/material'
import { Box, styled} from '@mui/system'
import React, {useState, useEffect} from 'react'
import Post from "./post"
import Loading from "./loading"

const url ='http://course-api.com/react-tours-project'

const StyledBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
}))

const App = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        const newTour = tours.filter((tour)=> tour.id !==id)
        setTours(newTour)
    }


    const FetchTour = async ()=>{
        setLoading(true)
        try{
            const response = await fetch(url)
            const tours = await response.json()
            setLoading(false)
            setTours(tours)
        } catch(error){
            setLoading(false)
            console.log(error)
        }
       
       
        console.log(tours)
    }

    useEffect(()=>{
        FetchTour()
    },[])
   
    if (loading){
        return (
            <>
            <StyledBox>
                 <Loading/>
            </StyledBox>
            
            </>
        )
    }
    if (tours.length == 0){
        return (
            <>
                    <StyledBox sx={{mt:'40vh'}}>
                        <Typography variant="h4" mb={5} borderBottom={4} borderColor='#86c232'>No Tours Left</Typography>
                        <Button variant="contained" onClick={FetchTour} bgcolor="green">Refresh</Button>
                   </StyledBox>
            </>
        )
    }
    return <>
        <StyledBox>
            <Typography variant="h4" mb={5} borderBottom={4} borderColor='#86c232'>Tours</Typography>
            <Post tours={tours} removeTour={removeTour}/>
        </StyledBox>
        
    </>
}

export default App
