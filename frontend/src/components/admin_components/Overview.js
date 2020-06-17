import React, { useState, useEffect } from "react";
import Reset from "./button/resetbutton/ResetButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Grid,
  Paper,
  Container,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  Table,
  TableContainer,
  Typography,
  TextField,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import axios from "axios";
// 5 users per page

export default function Overview() {
  const classes = useStyles();
  // clsx
  //A tiny (228B) utility for constructing className strings conditionally.
  //Also serves as a faster & smaller drop-in replacement for the classnames module
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [allCustomerState, setAllCustomerState] = useState([]);
  const [countCustomerState, setCountCustomerState] = useState();
  const [customerState, setCustomerState] = useState({});
  const [idState, setIdState] = useState("");

  // Upon loading, useEffect will get called
  useEffect(() => {
    getAllCustomer();
  }, []);

  // Retrieve all the customers
  const getAllCustomer = () => {
    axios
      .get(`http://localhost:9000/users/`)
      .then((response) => {
        // Retrieve from object => object => array (Users)
        setAllCustomerState(response.data.Users);
        // Retrieve the number of customer
        setCountCustomerState(response.data.count);
      })
      // throws an error if there is no data
      .catch((error) => alert(error));
  };

  // Ensure that the data gets re-rendered
  useEffect(() => {
    getSpecificCustomer();
  }, [idState]);

  // Searching for a specific customer
  const getSpecificCustomer = () => {
    axios
      .get(`http://localhost:9000/users/search/${idState}`)
      .then((response) => {
        setCustomerState(response.data.user);
      })
      .catch((error) => alert(error));
  };

  return (
    <Grid container justify="center">
      <Container maxWidth="1g" className={classes.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={3} md={2} lg={3}>
            <Paper className={fixedHeightPaper} elevation="3">
              Pending Customer Status
            </Paper>
          </Grid>
          <Grid item xs={3} md={2} lg={3}>
            <Paper className={fixedHeightPaper} elevation="3">
              Pending CreditCard Approval
            </Paper>
          </Grid>
          <Grid item xs={3} md={2} lg={3}>
            <Paper className={fixedHeightPaper} elevation="3">
              Total Customers
              <span><Typography variant="h1">{countCustomerState}</Typography></span>
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid container justify="center" className={classes.gridContainer}>
          <Grid item className={classes.gridItem}>
            <TableContainer component={Paper}>
              <Table className={classes.table}>
                <TableHead>
                  <Typography variant="h6">Customer Details</Typography>
                  <Grid>
                    <FontAwesomeIcon icon={faSearch} />
                    <TextField
                      id="search-with-icon"
                      value={idState}
                      label="SEARCH"
                      onChange={(event) => setIdState(event.target.value)}
                    />
                  </Grid>
                  <TableRow>
                    <TableCell width="20%">Customer ID</TableCell>
                    <TableCell width="10%">Account Status</TableCell>
                    <TableCell width="20%">Email</TableCell>
                    <TableCell width="15%">Balance</TableCell>
                    <TableCell width="10%">CreditCard Type</TableCell>
                    <TableCell width="10%">CreditCard Status</TableCell>
                    <TableCell width="15%">CreditCard Limit</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCustomerState.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell width="20%" component="th" scope="row">
                        {row._id}
                      </TableCell>
                      <TableCell width="10%">{row.account_status}</TableCell>
                      <TableCell width="20%">{row.email}</TableCell>
                      <TableCell width="15%">10000</TableCell>
                      <TableCell width="10%">Gold</TableCell>
                      <TableCell width="10%">Inactive</TableCell>
                      <TableCell width="15%">10000</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },

  title: {
    flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },

  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },

  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },

  fixedHeight: {
    height: 240,
  },
  gridItem: {
    paddingTop: 40,
  },
  table: {
    minWidth: 650,
  },
}));
