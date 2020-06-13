import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { paymentListItems, serviceListItems } from './SideNavigation';
import CreditBalance from './CreditBalance';
import CreditLimit from './CreditLimit';
import PaymentDetails from './PaymentDetails';
import './Overview.css';

const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,  
}));

export default function Dashboard() {
  const [state, setState] = React.useState({
    name: 'creditCardSelect',
    id: 'creditCardSelect',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };
  const classes = useStyles();
 
  return (
    <div className="root">
      <CssBaseline />
      <AppBar position="absolute" className="appBar">
        <Toolbar className="toolbar">
          <div className="search">
            <div className="searchIcon">
              <SearchIcon />
            </div>
            <InputBase
              placeholder="SEARCH"
              classes={{
                root: "inputRoot",
                input: "inputInput"
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <IconButton color="inherit">
              <AccountCircleIcon /> 
              <Typography component="h6" variant="p" color="inherit" noWrap className="title">
              Ethan Khoo
              </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: "drawerPaperx"
        }}
      >
        
      <Typography component="p" variant="h6" className="digiBankText">
      Optimum DigiBank
      </Typography>
        <List>{paymentListItems}</List>
        <Divider />
        <List>{serviceListItems}</List>
      </Drawer>
      <main className="content">
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className="container" >
          <Grid container spacing={3}>
          {/* Select CreditCard Dropdown */}
            <Grid item xs={6}>
              <Paper className="selectCreditCardPaper">
              <FormControl variant="filled" className="formControl">
                <InputLabel htmlFor="creditCardSelect">Select CreditCard</InputLabel>
                <Select
                  className="creditCardDd"
                  native
                  value={state.age}
                  onChange={handleChange}
                  inputProps={{
                    name: 'creditCardSelect',
                    id: 'creditCardSelect',
                  }}
                >
                  <option aria-label="None" value="" />
                  <option value={10}>Credit Card 1</option>
                  <option value={20}>Credit Card 2</option>
                  <option value={30}>Credit Card 3</option>
                </Select>
              </FormControl>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            {/* Credit Balance Amount */}
            <Grid item xs={12} md={8} lg={6}>
              <Paper className="fixedHeightPaper">
                <CreditBalance />
              </Paper>
            </Grid>
            {/* Credit Limit */}
            <Grid item xs={12} md={4} lg={6}>
              <Paper className="fixedHeightPaper">
                <CreditLimit />
              </Paper>
            </Grid>
            {/* Payment Details */}
            <Grid item xs={12}>
              <Paper className="paper">
                <PaymentDetails />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}