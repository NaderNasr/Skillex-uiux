import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';



import useStyles from './styles.js'

const Maps = ({ setCoords, coords, setBounds, places }) => {
  const classes = useStyles()
  // const isDesktop = useMediaQuery('(min-width:600px)')
  // const coordinates = { lat: 0, lng: 0 }
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAvlqoiiXefuEzL1zbHbaUhaNt5QZtoS24' }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={''}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng })
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw })
        }}
      onChildClick={(child) => {
        console.log(child)
      } }
      >
        {places?.map((place, i) => (
          <div className={classes.markerContainer}
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={i}
          >

          </div>
        ))}
      </GoogleMapReact>
    </div>
  )
}

export default Maps