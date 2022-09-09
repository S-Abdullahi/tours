import React, {useState} from 'react'
import { CardContent, CardMedia, Typography,Card, CardActions,Button, Box } from '@mui/material'
import { styled} from '@mui/system'

const StyledBox = styled(Box)(({theme})=>({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '10px'
}))

const Post = ({tours, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <>
            {tours.map((tour)=>{
                return (
                    <Card sx={{ maxWidth: 345, mb:5}} key={tour.id}>
                <CardMedia
                    component="img"
                    height="180"
                    image={tour.image}
                    alt={tour.name}
                />
                <CardContent>
                    <StyledBox>
                        <Typography gutterBottom variant="h6" fontSize='0.95rem' component="div">
                        {tour.name}
                        </Typography>
                        <Typography variant="h6" fontSize='0.95rem' bgcolor='#f2f8f2' padding='4px' borderRadius='3px' color='#86c232'>${tour.price}</Typography>
                    </StyledBox>
                    <Typography variant="body2" color="text.secondary">
                    {readMore ? tour.info : `${tour.info.substring(0,200)}...`}
                    <Button variant="text"sx={{textTransform:'lowercase'}} onClick={()=>setReadMore(!readMore)}>{readMore?'show less': 'see more'}</Button>
                    </Typography>
                </CardContent>
                <CardActions sx={{display:'flex',justifyContent: "center", mb:3}}>
                    <Button variant="outlined" color="error" onClick={()=>{removeTour(tour.id)}}>Not Interested</Button>
                </CardActions>
            </Card>
                )
            })}
            
        </>
    )
}

export default Post