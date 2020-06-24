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
  const [customerState, setCustomerState] = useState({});
  const [idState, setIdState] = useState("");
  const [searchState, setSearchState] = useState("");


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

  const getCustomerStatus = () => {
    axios.get(`http://localhost:9000/users/`,{
      data: {
        account_status: "pending"
      } 
    }
    
    ).then(response=>console.log(response.data))
  }

  const handleSearchCustomerById = () => {
    setSearchState(true);
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
        console.log(response.data.user);
      })
      .catch((error) => alert(error));
  };

  return (
      <div className={classes.appBarSpacer}>
        <Container maxWidth="lg" className={classes.containerStyle}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper} elevation="3">
                Pending Customer Status
              </Paper>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <Paper className={fixedHeightPaper} elevation="3">
                Pending CreditCard Approval
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
          <Grid item xs={12} style={{paddingTop:"50px"}}>
            <Paper elevation="3">
              <TableContainer>
                <Table className={classes.table}>
                  <TableHead>
                    <Typography
                      variant="h6"
                      style={{ letterSpacing: "3px", width: "max-content" }}
                    >
                      Customer List
                    </Typography>
                    <Grid>
                      <FontAwesomeIcon
                        icon={faSearch}
                        className={classes.searchIconStyle}
                      />
                      <TextField
                        id="search-with-icon"
                        value={idState}
                        label="SEARCH"
                        onChange={(event) => {
                          setIdState(event.target.value);
                          setSearchState(true);
                        }}
                      />
                    </Grid>
                    <TableRow>
                      <TableCell style={{ letterSpacing: "2px" }} width="20%">
                        Customer ID
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="10%">
                        Account Status
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="20%">
                        Email
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="15%">
                        Balance
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="10%">
                        CreditCard Type
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="10%">
                        CreditCard Status
                      </TableCell>
                      <TableCell style={{ letterSpacing: "2px" }} width="15%">
                        CreditCard Limit
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {searchState
                      ? customerState.map((row) => (
                          <TableRow key={row._id}>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="20%"
                              component="th"
                              scope="row"
                            >
                              {row._id}
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="10%"
                            >
                              {row.account_status}
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="20%"
                            >
                              {row.email}
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="15%"
                            >
                              10000
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="10%"
                            >
                              Gold
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="10%"
                            >
                              Inactive
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="15%"
                            >
                              10000
                            </TableCell>
                          </TableRow>
                        ))
                      : allCustomerState.map((row) => (
                          <TableRow key={row._id}>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="20%"
                              component="th"
                              scope="row"
                            >
                              {row._id}
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="10%"
                            >
                              {row.account_status}
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="20%"
                            >
                              {row.email}
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="15%"
                            >
                              10000
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="10%"
                            >
                              Gold
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="10%"
                            >
                              Inactive
                            </TableCell>
                            <TableCell
                              style={{ letterSpacing: "2px" }}
                              width="15%"
                            >
                              10000
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

  appBarSpacer: theme.mixins.toolbar,

  containerStyle: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: "100px",
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
  table: {
    minWidth: 650,
  },
}));
