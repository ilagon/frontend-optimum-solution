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
  const fixedHeightPaper = clsx(classes.paperStyle, classes.heightStyle);

  const [allCustomerState, setAllCustomerState] = useState([]);
  const [countCustomerState, setCountCustomerState] = useState();
  const [pendingCreditCardState, setPendingCreditCardState] = useState();
  const [pendingCustomerState, setPendingCustomerState] = useState();
  // const [idState, setIdState] = useState("");
  // const [searchState, setSearchState] = useState("");

  // Upon loading, useEffect will get called
  useEffect(() => {
    getAllCustomer();
    getPendingCreditCardStatus();
    getPendingCustomer();
    getTotalCustomer();
  }, []);

  const getTotalCustomer = () => {
    axios
      .get(`http://localhost:9000/users`)
      .then((response) => {
        // Retrieve the number of customer
        setCountCustomerState(response.data.count);
      })
      // throws an error if there is no data
      .catch((error) => alert(error));
  };

  // Retrieve all the customers
  const getAllCustomer = () => {
    axios
      .get(`http://localhost:9000/creditcard`)
      .then((response) => {
        // Retrieve from object => object => array (Users)
        setAllCustomerState(response.data.creditcard);
      })
      // throws an error if there is no data
      .catch((error) => alert(error));
  };
  const getPendingCreditCardStatus = () => {
    axios
      .get(`http://localhost:9000/creditcard/pending`)
      .then((response) => {
        // Retrieve the number of pending creditcard
        setPendingCreditCardState(response.data.count);
        console.log(response.data.count);
      })
      // throws an error if there is no data
      .catch((error) => alert(error));
  };

  const getPendingCustomer = () => {
    axios
      .get(`http://localhost:9000/pending/pending`)
      .then((response) => {
        // Retrieve the number of pending customer
        setPendingCustomerState(response.data.count);
      })
      // throws an error if there is no data
      .catch((error) => alert(error));
  };

  // const handleSearchCustomerById = () => {
  //   setSearchState(true);
  // };

  // // Ensure that the data gets re-rendered
  // useEffect(() => {
  //   getSpecificCustomer();
  // }, [idState]);

  // // Searching for a specific customer
  // const getSpecificCustomer = () => {
  //   axios
  //     .get(`http://localhost:9000/users/search/${idState}`)
  //     .then((response) => {
  //       setCustomerState(response.data.user);
  //       console.log(response.data.user);
  //     })
  //     .catch((error) => alert(error));
  // };

  return (
    <div className={classes.divStyle}>
      <Container maxWidth="lg" className={classes.gridContainerStyle}>
        <Grid container spacing={3} justify="center" style={{ width: "130%" }}>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaper} elevation="3">
              Pending Customer Status
              <span>
                <Typography variant="h1">{pendingCustomerState}</Typography>
              </span>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaper} elevation="3">
              Pending CreditCard Approval
              <span>
                <Typography variant="h1">{pendingCreditCardState}</Typography>
              </span>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <Paper className={fixedHeightPaper} elevation="3">
              Total Customers
              <span>
                <Typography variant="h1">{countCustomerState}</Typography>
              </span>
            </Paper>
          </Grid>
        </Grid>
        <Grid item xs={12} style={{ paddingTop: "3%" }}>
          <Paper elevation="3" style={{ width: "128%" }}>
            <TableContainer>
              <Table className={classes.table}>
                <TableHead>
                  <Typography variant="h6" style={{ letterSpacing: "3px" }}>
                    Customer List
                  </Typography>
                  <Grid>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className={classes.searchIconStyle}
                    />
                    <TextField id="search-with-icon" label="SEARCH" />
                  </Grid>
                  <TableRow>
                    <TableCell style={{ letterSpacing: "2px" }} width="12%">
                      Customer ID
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="13%">
                      Account Status
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="15%">
                      Email
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="11%">
                      Balance
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="15%">
                      CreditCard Type
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="15%">
                      CreditCard Status
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="19%">
                      CreditCard Limit
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCustomerState.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell
                        style={{ letterSpacing: "2px" }}
                        width="20%"
                        component="th"
                        scope="row"
                      >
                        {row._id}
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="12%">
                        {row.user.account_status}
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="13%">
                        {row.user.email}
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="11%">
                        {row.creditcard_balance}
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="15%">
                        {row.creditcard_type}
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="15%">
                        {row.creditcard_status}
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="19%">
                        {row.creditcard_limit}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Container>
    </div>
  );
}

// Overrides the current default theme provided by the material UI
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  title: {
    flexGrow: 1,
  },

  divStyle: {
    width: "100%",
  },

  gridContainerStyle: {
    marginTop: "7%",
    marginLeft: "14%",
  },

  paperStyle: {
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    letterSpacing: "2px",
    justifyContent: "center",
    alignItems: "center",
  },

  searchIconStyle: {
    marginTop: "25px",
    marginLeft: "20px",
    marginRight: "30px",
  },

  heightStyle: {
    height: 240,
  },
  gridItem: {
    paddingTop: 40,
  },
}));
