import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    padding: '7px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '120px', borderRadius:'10px'
  },
  mapContainer: {
    height: '80vh', width: '50vw', margin: '10px', marginTop:'50px',
    background: 'rgba(255, 255, 255, 0.25)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    borderRadius:'10px',
    padding: '25px',
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
  search: {
    width: '50vw',
    margin:'10px'
  }
}));