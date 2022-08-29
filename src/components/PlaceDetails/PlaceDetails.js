import React from 'react'

import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'

import './styles.js'
import { LocationOnOutlined, PhoneOutlined } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'
import useStyles from './styles.js'

const PlaceDetails = ({ place }) => {
  const classes = useStyles()
  console.log(place)
  return (
    <>
      <Card elevation={6}>
        <CardMedia
          style={{ height: 350 }}
          image={place.photo ? place.photo.images.large.url : "https://source.unsplash.com/random/?Restaurants, food"}
          title={place.name}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant='h5'
          >
            {place.name}
          </Typography>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Price</Typography>
            <Typography variant='subtitle1' gutterBottom>{place.price_level}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Ranking</Typography>
            <Typography variant='subtitle1' gutterBottom>{place.ranking}</Typography>
          </Box>
          {place?.awards?.map((award) => (
            <Box display='flex' justifyContent='space-between' my={1}>
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
            </Box>
          ))}
          {place?.cuisine?.map((food) => (
            <Chip key={food.name} size='small' label={food.name} className={classes.chip}>{food.name}</Chip>
          ))}
          {place?.address && (
            <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.subtitle}>
              <LocationOnOutlined /> {place.address}
            </Typography>
          )}
          {place?.phone && (
            <Typography gutterBottom variant='subtitle2' color='textSecondary' className={classes.spacing}>
              <PhoneOutlined /> {place.phone}
            </Typography>
          )}
          <CardActions>
            <Button size='small' color='primary' onClick={() => window.open("https://www.tripadvisor.ca/Search?q="+place.name, '_blank')}>
              Trip Advisor
            </Button>
            <Button size='small' color='primary' onClick={() => window.open("https://google.com/search?q="+place.name, '_blank')}>
              Website
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  )
}

export default PlaceDetails