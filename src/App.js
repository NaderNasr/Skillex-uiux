import { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import NavBar from './components/Navbar/NavBar';
import List from './components/List/List';
import Maps from './components/GoogleMaps/Maps';
import { getPlaces } from './api'

import { CssBaseline, Grid } from '@material-ui/core';

import './App.css'
import Footer from './components/Footer/Footer';
const App = () => {

  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState({})
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type, setType] = useState('hotels');
  const [rating, setRating] = useState(0);
  const [filteredPlaces, setFilteredPlaces] = useState([])
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place?.rating > rating)
    setFilteredPlaces(filteredPlaces);
  }, [rating])

  useEffect(() => {
    // console.log(coords, bounds)
    if (bounds?.ne && bounds?.sw) {
      setIsLoading(true)
      getPlaces(type, bounds?.ne, bounds?.sw)
        .then((data) => {
          setPlaces(data?.filter((place) => place.name && place.num_reviews > 0));
          setFilteredPlaces([])
          setIsLoading(false);
          // console.log(places);
        })
    }
  }, [type, bounds]);

  return (
    <>
      <CssBaseline />
      <NavBar setCoords={setCoords} />
      <Hero setCoords={setCoords} />
      <Grid container spacing={4} style={{ width: '100vw', margin:'80px' }}>
        <Grid item xs={12} md={4}>
          <List
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked={childClicked}
            isLoading={isLoading}
            setRating={setRating}
            setType={setType}
            rating={rating}
            type={type}
            setCoords={setCoords}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Maps
            setCoords={setCoords}
            coords={coords}
            setBounds={setBounds}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
      <Footer/>
    </>
  )
}

export default App