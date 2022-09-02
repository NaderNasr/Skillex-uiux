import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '7px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '120px', borderRadius:'10px'
  },
  mapContainer: {
    height: '86vh', width: '80%', margin: '10px', marginTop:'50px'
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
}));