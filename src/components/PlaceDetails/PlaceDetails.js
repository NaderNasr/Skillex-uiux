import React, { useState } from 'react'
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import './styles.js'
import { LocationOnOutlined, PhoneOutlined } from '@material-ui/icons'
import { Rating } from '@material-ui/lab'
import useStyles from './styles.js'

const PlaceDetails = ({ place, refProp, selected }) => {
  const classes = useStyles()

  if (selected) {
    refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  // console.log('HAHAHA',place?.awards)

  const [open, setOpen] = useState(false);

  return (
    <>
      <Card elevation={6} sx={{ display: 'flex' }}>
        <CardMedia
          style={{ height: 350 }}
          image={place.photo ? place.photo.images.large.url : "https://source.unsplash.com/random/?Restaurants, food"}
          title={place.name}
        />
        <CardContent sx={{ display: 'flex' }}>
          <Typography
            gutterBottom
            variant='h5'
          >
            {place.name}
          </Typography>
          <Box display='flex' justifyContent='space-between'>
            <Rating value={Number(place.rating)} readOnly />

            <Typography variant='subtitle1' gutterBottom>From {place.num_reviews} reviews</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Price</Typography>
            <Typography variant='subtitle1' gutterBottom>{place.price_level}</Typography>
          </Box>
          <Box display='flex' justifyContent='space-between'>
            <Typography variant='subtitle1'>Ranking</Typography>
            <Typography variant='subtitle1' gutterBottom> {place.ranking}</Typography>
          </Box>
          {open ?
            place?.awards?.map((award) => (
              <Box display='flex' justifyContent='space-between' my={1}>
                <img src={award.images.small} alt={award.display_name} />
                <Typography variant='subtitle2' color='textSecondary'>{award.display_name}</Typography>
              </Box>

            )) : <></>}
          <br />
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
            <Button size='small' color='primary' onClick={() => window.open(place.web_url, '_blank')}>
              Trip Advisor
            </Button>
            <Button size='small' color='primary' onClick={() => window.open(place.website, '_blank')}>
              Website
            </Button>
            <Button size='small' color='secondary' onClick={() => setOpen(!open)}>Certifications</Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  )
}

export default PlaceDetails