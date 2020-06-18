import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import styles from "./css/TransferMoney.module.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Searchbar from '../common/Searchbar';
import SideBar from '../common/SideBar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
  formControl: {
    minWidth: 560,
    float: 'left',
    marginLeft: '50px'
  },
  formControl2: {
    margin: theme.spacing(3),
    minWidth: 650,
    float: 'left',
    marginLeft: '5px'
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '70ch',
      color: '#173A77',
      marginRight: '160px'
    },
  },
  margin: {
    width: '80%',
    height: '70px',
    marginLeft: '250px',
    margin: theme.spacing(2),
    marginTop: '200px'
  },
  cancel: {
    width: '80%',
    height: '70px',
    marginLeft: '250px',
  },
  frontKeepLeft: {
    float: 'left',
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

export function AddPayeeReceipentForm() {
  const [state, setState] = React.useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const classes = useStyles();

  return (
    <div className={styles.root}>
      <CssBaseline />
      <Searchbar></Searchbar>
          <SideBar></SideBar>
      <main className={styles.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="100%" className={styles.container} >
                  {/* Title */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <div id={styles.TitleContainer}>
              <p className={styles.FormTitle}>Transfer Money</p>
              </div>
        </Grid>
      </Grid>
      <div>
           {/* Title */}
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div className={styles.formBody}>
            <p style={{ float: "left", marginTop: "50px", fontWeight: "bold", color: "#173a77", fontSize: "1.25em" }}>To</p>
          </div>
          <div className={styles.formFromBody}>
            <p style={{ marginLeft: "180px", marginTop: "60px", fontWeight: "bold", color: "#173a77", fontSize: "1.25em" }}>From</p><br />
          </div>
        </Grid>
      </Grid>
      {/* Receipent Details */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <div className={styles.fromBody}>
            <p style={{marginRight: "630px",color: "#173a77", fontSize: "1.55em"}}>Adrian</p>
          </div>

         
            <p style={{ whiteSpace:"nowrap",marginRight: "480px",color: "#173a77", fontSize: "1.55em"}}>DBS Savings Account</p>
       

          <form className={classes.root} noValidate autoComplete="on">
          <p style={{ whiteSpace:"nowrap",marginRight: "560px",color: "#173a77", fontSize: "1.55em"}}>123 4 567890</p>
             <br></br>
            <TextField
              required
              id="transferAmt"
              label="Transfer Amount"
              placeholder="Transfer Amount"
              multiline
            />
          </form>
        </Grid>
        {/* Sender Details */}
        <Grid item xs={12} md={4} lg={5}>
        <FormControl variant="filled" className={classes.formControl2}>
            <InputLabel htmlFor="creditCardSelect">Select CreditCard</InputLabel>
            <Select
              required
              className={styles.selectColor}
              native
              value={state.senderCreditCard}
              onChange={handleChange}
              inputProps={{
                name: 'senderCreditCardType'
              }}
            >
              <option aria-label="None" value="" />
              <option value='Platimum Card'>Platimum Card</option>
              <option value='PlatiDad Card'>PlatiDad Card</option>
            </Select>
          </FormControl>
          <div className={classes.frontKeepLeft}>
            <Typography component="h2" variant="h4" color="primary" gutterBottom>
              Current Balance
    </Typography>
            <Typography component="p" variant="h4" color="primary">
              $300.00
  </Typography>
  <Typography component="h2" variant="h5" color="secondary">
    <br></br>
              Please type in an amount less than <br></br>the balance amount
  </Typography>
          </div>
        <Button variant="contained" color="secondary" className={classes.margin}>
            Next
        </Button>
        <ColorButton variant="contained" color="secondary" className={classes.cancel}>
            Cancel
        </ColorButton>
        </Grid>
      </Grid>
      </div>
      </Container>
          </main>
    </div>
  );
} 