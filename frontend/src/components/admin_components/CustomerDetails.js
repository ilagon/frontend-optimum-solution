import React, { useState, useEffect } from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Grid,
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
  Container,
  Typography,
  TextField,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// 10 Users per page

const useStyles = makeStyles((theme) => ({
  gridItem: {
    paddingTop: 40,
  },
  table: {
    minWidth: 650,
  },
}));

export default function CustomerDetails() {
  const classes = useStyles();

  const [allCustomerState, setAllCustomerState] = useState([]);
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
                  <TableCell width="10%">Name</TableCell>
                  <TableCell width="20%">Email</TableCell>
                  <TableCell width="30%">Address</TableCell>
                  <TableCell width="25%">Contact No.</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCustomerState.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell width="20%" component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell width="10%">{row.name}</TableCell>
                    <TableCell width="20%">{row.email}</TableCell>
                    <TableCell width="30%">
                      63 Arch St. Goodlettsville, TN 37072
                    </TableCell>
                    <TableCell width="25%">9283 9210</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}

