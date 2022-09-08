import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  container: {
    position: 'relative',
    minHeight: '10vh'
  },

  wrap: {
    paddingBottom: '2.5rem',    /* Footer height */
  },

  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '2.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
    paddingBottom: '10px',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)'        /* Footer height */
  },

  buttons:{
    display:'flex',
    flexDirection: 'row',
    justifyContent:'space-around',
    paddingTop:'7px'
  }
}));