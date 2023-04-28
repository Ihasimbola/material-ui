import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import image from '../assets/image.jpg';
import { Typography, Box, Rating } from '@mui/material';
import { AccessTime } from '@mui/icons-material';
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material';

const styles = {
    textColor: "#949494",
    gray: "#4a4a4a"
}

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: { variant: 'body2' },
                    style: {
                        fontSize: 12,
                        color: styles.textColor
                    }
                },
                {
                    props: { variant: 'body3' },
                    style: {
                        fontSize: 9,
                        color: styles.textColor
                    }
                },
                 {
                    props: { variant: 'h6' },
                    style: {
                        color: styles.gray
                    }
                 }
            ]
        }
    }
})

const TourCard = ({ data }) => {
  console.log(data)

    const [ratingValue, setRatingValue] = useState(0);

    return (
        <Grid item xs={3}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3}>
                    <img src={data.image} className='img' alt="proposition" />
                    <Box paddingX={1.5}>
                        <Typography variant='subtitle1' component="h2">
                            { data.name }
                        </Typography>

                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                            <AccessTime sx={{ width: '12.5px' }} />
                            <Typography
                                variant='body2'
                                component='p'
                                sx={{ marginLeft: '5px' }}
                            >
                                { `${data.duration} ${data.duration > 1? 'hours' : 'hour'}` }
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                            marginTop={3}
                        >
                            <Rating
                                name={data.id}
                                precision={0.5}
                                value={ ratingValue || data.rating }
                                onChange={(e, newValue) => {
                                    console.log(e.target.name)
                                    setRatingValue(newValue);
                                }}
                                size='small'
                            />
                            <Typography marginLeft='5px' variant='body2' component='span'>
                                {data.rating}
                            </Typography>
                            <Typography sx={{ marginLeft: 'auto' }} marginLeft='5px' variant='body2' component='span'>
                                { `(${data.numberOfReviews}) ${data.numberOfReviews > 1? 'reviews' : 'review'}` }
                            </Typography>
                        </Box>

                        <Box marginTop='5px' >
                            <Typography marginLeft='5px' variant='h6' component='span'>
                                {`From ${data.price} C $` }
                            </Typography>
                        </Box>
                    </Box>
                </Paper>
            </ThemeProvider>
        </Grid>
    )
}

export default TourCard;