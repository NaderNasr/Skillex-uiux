import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';



import useStyles from './styles.js'
import Search from '../Search/Search.js';

const Maps = ({ setCoords, coords, setBounds, places, setChildClicked }) => {
  const classes = useStyles()
  const isDesktop = useMediaQuery('(min-width:600px)')
  // const coordinates = { lat: -79.3832, lng: 43.6532 }
  return (
    <>
      <div className={classes.search}>
      <Search setCoords={setCoords} />
      </div>
      <div className={classes.mapContainer} >

        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAvlqoiiXefuEzL1zbHbaUhaNt5QZtoS24' }}
          defaultCenter={coords}
          center={coords}
          defaultZoom={15}
          margin={[50, 50, 50, 50]}
          // options={''}
          onChange={(e) => {
            setCoords({ lat: e.center.lat, lng: e.center.lng })
            setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
          }}
          onChildClick={(child) => {
            // console.log(child)
            setChildClicked(child)
          }}
        >
          {places?.map((place, i) => (
            <div className={classes.markerContainer}
              lat={Number(place.latitude)}
              lng={Number(place.longitude)}
              key={i}
            >
              {!isDesktop ? (
                <LocationOnOutlinedIcon color='secondary' fontSize='large' />
              ) : (
                <Paper elevation={3} className={classes.paper}>
                  <Typography className={classes.Typography} variant='subtitle2' gutterBottom>
                    {place.name}
                  </Typography>
                  <img className={classes.pointer}
                    src={place.photo ? place.photo.images.large.url : "https://source.unsplash.com/random/?Restaurants, food"}
                    alt={place.name}
                  />
                  <Rating size='small' value={Number(place.rating)} readOnly />
                </Paper>
              )}
            </div>
          ))}
        </GoogleMapReact>
      </div>
    </>
  )
}

export default Maps