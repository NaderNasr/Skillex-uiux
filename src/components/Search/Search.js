import { SearchOutlined } from '@material-ui/icons'
import { Autocomplete } from '@react-google-maps/api'
import React, { useState } from 'react'
import './Search.css'

const Search = ({ setCoords }) => {
  const [autoComplete, setAutoComplete] = useState(null);

  const onLoad = (word) => {
    setAutoComplete(word)
  }

  const onPlaceChanged = () => {
    const lat = autoComplete.getPlace().geometry.location.lat()
    const lng = autoComplete.getPlace().geometry.location.lng()

    setCoords({ lat, lng })
  }
  return (
    <>
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged }>
        <input type="text" id="search" name="search" placeholder='Where do you want to go?' />
      </Autocomplete>
    </>
  )
}

export default Search