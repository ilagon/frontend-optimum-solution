import {useState} from 'react';
import  React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import styles from "./css/TransferMoney.module.css";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 560,
    float: 'left',
    marginLeft: '50px'
  },
  formControl2: {
    margin: theme.spacing(6),
    minWidth: 650,
    float: 'left',
    marginLeft: '5px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(7),
      width: '70ch',
      color: '#173A77',
      float: 'left'
    },
  },
  margin: {
    margin: theme.spacing(2),
    width: '35%',
    height: '70px',
    float: 'right',
    marginRight: '3px',
    marginTop: '200px',
    marginBottom: '80px',
  },
  frontKeepLeft: {
    float: 'left',
    margin: theme.spacing(2),
    marginLeft: '5px'
  },
}));

const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText('#AA3A21'),
    backgroundColor: '#AA3A21',
    '&:hover': {
      backgroundColor: '#AA3A21',
    },
  },
}))(Button);

export default function OtherReceipentsTransferForm() {

 const [payeeList, setPayeeList] = useState([]);
 const [state, setState] = useState({
  recipientName: '',
  recipentBank: 'Optimum Digibank',
  recipentAccNo: '',
});
  const classes = useStyles();

  function fetchData(){
    axios
      .get("http://localhost:9002/payee/transfer/5ee8792db5be6439f4d8474e")
      .then((response) => {
        console.log(response.data);
setPayeeList(response.data.payee); 
console.log(payeeList);
      })
      .catch((error) => console.log(error));
  };

  const addHandle= () => {
    window.location.href ="/AddPayee";
 }

 function selectPayee(name, accNo){
  setState({
    ...state,
    recipientName: name,
    recipentAccNo: accNo});
  localStorage.setItem("transferDetails", JSON.stringify(state));
  window.location.href ="/TransferMoney/SetTransferFromPayeeList";
}

  return (
    <div>
      {payeeList.length===0 ? fetchData() : ''}
      <CssBaseline />
      {/* Payee 1 */}
      {payeeList.map((obj) =>(
        <Grid container spacing={3}>
        <Grid item xs={12}>
        <Paper className={styles.paper} onClick={selectPayee(obj.name,obj.number)}>
        <div className={styles.textLeft}> 
        <Typography Typography component="h2" variant="h4" color="primary" gutterBottom>
         {obj.name}<br></br><br></br>Optimum DigiBank Savings Account {obj.number}
         <InfoRoundedIcon fontSize="inherit" className={styles.infoIcon}></InfoRoundedIcon>
        </Typography>
        </div>
              </Paper>
        </Grid>
      </Grid>
      ))}
      
      {/* Payee 2 */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
              {/* Payee Button */}
                <ColorButton onClick={addHandle} variant="contained" color="secondary" className={classes.margin}>
            Add Payee
        </ColorButton>
        </Grid>
        </Grid>

    </div>
  );
} 