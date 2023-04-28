import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import TourCard from './components/TourCard';
import SearchAppBar from './components/SearchAppBar';
import cities from './data/data.json';
import { Typography, Box } from '@mui/material';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginTop: 8 }}>
        {
          cities.map((city, idx) => {
            return(
              <Box sx={{ marginBottom: 12 }} >
                <Typography variant='h2' component='h2' marginBottom={3}>
                  {city.name}
                </Typography>
                <Grid container spacing={4}>
                  {
                    city.tours.map((tour, idx) => {
                      return <TourCard data={tour} key={idx} />
                    })
                  }
                </Grid>
              </Box>
            )
          })
        }
      </Container>
    </div>
  );
}

export default App;
