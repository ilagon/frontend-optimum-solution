import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from "./css/TransferMoney.module.css";
import OneTimeTransferForm from './OneTimeTransferForm';
import OtherReceipentsTransferForm from './OtherReceipentsTransferForm';
import { BrowserRouter as Router, Switch, Route, NavLink} from 'react-router-dom';
import SubmitTransferPage from './SubmitTransferPage';

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
  }));

  // export default function TransferMoneyPage() {
    
  //     return (
  //       <div className={styles.root}>
  //         <CssBaseline />
  //         <Searchbar></Searchbar>
  //         <SideBar></SideBar>
  //         <Router>
  //         <Switch>
  //             <Route exact path='/' component={TransferMoneyHomePage} />
  //             <Route path='/SubmitTransferPage' component={SubmitTransferPage} />
  //         </Switch> 
  //         </Router>
  //       </div>
  //     );
  // } 

  export default function TransferMoneyHomePage() {
    const classes = useStyles();
      return (
        <main className={styles.content}>
        <Router>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="100%" className={styles.container} >
            <Grid container spacing={3}>
            {/* Tab */}
              <Grid item xs={12}>
              <div id={styles.TitleContainer}>
              
                <NavLink className={styles.wrapper} activeClassName={styles.selected} exact to={'/TransferMoney'}>One Time Transfer</NavLink>
                <NavLink className={styles.rapper} activeClassName={styles.selected} to={'/TransferMoney/payee'}>Other Receipients</NavLink>
             
              <p className={styles.FormTitle}>Transfer Money</p>
              </div>
              </Grid>
            </Grid>
            <Switch>
            <Route exact path='/TransferMoney' component={OneTimeTransferForm} />
            <Route path='/TransferMoney/payee' component={OtherReceipentsTransferForm} />
            {/* <Route  path='/TransferMoney/Submit' component={SubmitTransferPage}/> */}
        </Switch>
          </Container>
          </Router>
        </main>
        );
  }