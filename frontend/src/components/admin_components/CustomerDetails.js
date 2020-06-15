import React, { useState, useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";


// 10 Users per page

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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
    height: 600,
  },

  fixedWidth: {
    width: 1300,
  },
}));

export default function CustomerDetails() {
  const classes = useStyles();
  // clsx
  //A tiny (228B) utility for constructing className strings conditionally.
  //Also serves as a faster & smaller drop-in replacement for the classnames module
  const fixedHeightWidthPaper = clsx(
    classes.paper,
    classes.fixedHeight,
    classes.fixedWidth
  );

  const [allCustomerState, setAllCustomerState] = useState([]);
  const [customerState, setCustomerState] = useState({});
  const [idState, setIdState] = useState("");
  const [totalItemsState, setTotalItemsState] = useState(0);
  const [currentPageState, setCurrentPageState] = useState();
  const [searchState, setSearchState] = useState("");
  const ITEMS_PER_PAGE = 10;

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
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="1g" className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightWidthPaper} elevation="3">
                <Table>
                  <TableHead>
                    <TableRow>Customer Details</TableRow>
                    <TableRow>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid>
                          <FontAwesomeIcon icon={faSearch} />
                        </Grid>
                        <Grid>
                          <TextField
                            id="search-with-icon"
                            value={idState}
                            label="SEARCH"
                            onChange={(event) => setIdState(event.target.value)}
                          />
                        </Grid>
                      </Grid>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableHead>
                      <TableRow>
                        <TableCell>Customer ID</TableCell>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Contact Number</TableCell>
                      </TableRow>
                    </TableHead>
                  </TableBody>
                  <TableBody>
                    {allCustomerState.map((user) => (
                      // Tells React that each rows are individual
                      <TableRow key={user._id}>
                        <TableCell component="th" scope="user">
                          {user._id}
                        </TableCell>
                        <TableCell align="left">{user.name}</TableCell>
                        <TableCell align="left">{user.email}</TableCell>
                        <TableCell align="left"></TableCell>
                        <TableCell align="left"></TableCell>
                        {customerState.name}
                        {customerState.email}
                        {customerState._id}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

//  <div className={classes.root}>
//             <CssBaseline />
//             <main className={classes.content}>
//                 <div className={classes.appBarSpacer} />
//                 <Container maxWidth='1g' className={classes.container}>
//                     <Grid container spacing={3}  justify="center" >
//                         <Grid item xs={12} md={3} lg={3}>
//                             <Paper className={fixedHeightPaper}>
//                                 Pending Customer Status
//                             </Paper>
//                         </Grid>
//                         <Grid item xs={12} md={3} lg={3}>
//                             <Paper className={fixedHeightPaper}>
//                                 Pending CreditCard Approval
//                             </Paper>
//                         </Grid>
//                         <Grid item xs={12} md={3} lg={3}>
//                             <Paper className={fixedHeightPaper}>
//                                 Total Customers
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                     <Grid container spacing={3} justify="center">
//                         <Grid item xs={9}>
//                             <Paper className={fixedHeightPaper}>
//                                 Customer List
//                                 <Search />
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                     <Box pt={4}>
//                         <Reset></Reset>
//                     </Box>
//                 </Container>
//             </main>
//         </div>
