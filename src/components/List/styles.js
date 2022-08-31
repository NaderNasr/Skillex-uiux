import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '15px',
    marginLeft:'20px',
    // height: '85vh'
    borderRadius:'15px'
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '70vh', overflow: 'auto',
  },
  changeStyle: {
    marginBottom: '15px', color:'white', fontWeight:'900', fontFamily:"Poppins"
  }
}));