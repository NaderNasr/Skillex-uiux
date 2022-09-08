
import { Grid, Typography } from '@material-ui/core';
import React from 'react'
import useStyles from './styles.js'

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrap}>
      </div>
      <div className={classes.footer}>
        <div className={classes.buttons}>
          <Typography>Footer</Typography>
          <Typography>Footer</Typography>
        </div>
      </div>
    </div>
  )
}

export default Footer