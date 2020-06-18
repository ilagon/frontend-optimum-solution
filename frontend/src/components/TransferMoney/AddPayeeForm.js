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

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
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
    width: '70%',
    height: '70px',
    marginLeft: '300px',
    margin: theme.spacing(2),
    marginTop: '400px'
  },
  cancel: {
    width: '70%',
    height: '70px',
    marginLeft: '300px',
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

export function AddPayeeForm() {
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
        </Grid>
      </Grid>
      {/* Receipent Details */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8} lg={6}>
          <form className={classes.root} noValidate autoComplete="on">
            <TextField
              required
              id="name"
              label="Name"
              placeholder="Name"
              multiline
            />
          </form>

          <FormControl variant="filled" className={classes.formControl}>
            <InputLabel htmlFor="bankSelect">Select Bank</InputLabel>
            <Select
              required
              className={styles.selectColor}
              native
              value={state.recipentBank}
              onChange={handleChange}
              inputProps={{
                name: 'recipentBank'
              }}
            >
              <option aria-label="None" value="" />
              <option value='Optimum Digibank'>Optimum Digibank</option>
              <option value='Optimum Digibank'>whatever fuck bank you can think of</option>
            </Select>
          </FormControl>

          <form className={classes.root} noValidate autoComplete="on">
            <TextField
              required
              id="accNum"
              label="Account No."
              placeholder="Account No."
              multiline
            />
          </form>
        </Grid>
        {/* Sender Details */}
        <Grid item xs={12} md={4} lg={5}>
        <Button variant="contained" color="secondary" className={classes.margin}>
            Save Payee
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