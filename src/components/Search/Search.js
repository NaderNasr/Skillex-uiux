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
    <div class="container">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div class="control-group">
          <input id="input" type="text" name="input" placeholder="City, Country" />
          <label for="input">Where do you want to traverse?</label>
        </div>
      </Autocomplete>
    </div>

  )
}

export default Search