import { CircularProgress, Select, Grid, Typography, InputLabel, MenuItem, FormControl } from "@material-ui/core"
import { createRef, useEffect, useState } from "react"
import PlaceDetails from "../PlaceDetails/PlaceDetails"
import Carousel from 'react-material-ui-carousel'
import useStyles from './styles'


const List = ({
  places,
  childClicked,
  isLoading,
  setRating,
  setType,
  rating,
  type,
}) => {

  const classes = useStyles()



  const [references, setReferences] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length).fill().map((_, i) => references[i] || createRef())

    setReferences(refs)
  }, [places])


  // console.log({childClicked})
  // const places1 = [
  //   { name: 'place 1' },
  //   { name: 'palce 2' },
  //   { name: 'place 3' },
  //   { name: 'place 1' },
  //   { name: 'palce 2' },
  //   { name: 'place 3' }
  // ];

  return (
    <div className={classes.container}>
      {/* <Typography
        variant='h4'
        style={{ marginBottom: '15px', color: 'white', fontWeight: '900', fontFamily: "Poppins" }}
      >
        Hotels, <br />
        Restaurants, <br />
        and Attractions around you
      </Typography> */}
      {isLoading ? (
        <div className={classes.loading}>
          <CircularProgress size='5rem' />
        </div>
      ) : (
        <>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.changeStyle}>Type</InputLabel>
            <Select className={classes.changeStyle}
              style={{ width: '300px' }}
              value={type}
              onChange={e => setType(e.target.value)}
            >
              <MenuItem value='restaurants'>Restaurants</MenuItem>
              <MenuItem value='hotels'>Hotels</MenuItem>
              <MenuItem value='attractions'>Attractions</MenuItem>

            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel className={classes.changeStyle}>Rating</InputLabel>
            <Select className={classes.changeStyle}
              style={{ width: '200px' }}
              value={rating}
              onChange={e => setRating(e.target.value)}
            >
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
                <Grid item key={i} xs={12} md={12} >
                  <PlaceDetails place={place} selected={Number(childClicked) === i} refProp={references[i]} />
                </Grid>
            ))}

          </Grid>
        </>
      )}
    </div>
  )
}

export default List