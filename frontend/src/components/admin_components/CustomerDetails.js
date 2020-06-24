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

// Overrides the current default theme provided by the material UI
const useStyles = makeStyles((theme) => ({

  searchIconStyle: {
    marginTop: "25px",
    marginLeft: "20px",
    marginRight: "30px",
  },
  gridContainerStyle: {
    marginTop: "131px",
    height: "81%",
    marginLeft: "262px",
    width: "85%",
  },

  containerStyle: {
    maxWidth: "inherit",
  },

  tableContainerStyle:{
    height: "165%",
    minHeight: "80vh",
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
    <Container className={classes.containerStyle} fixed>
      <Grid container justify="center"  className={classes.gridContainerStyle}>
        <Grid item xs={12}>
          <TableContainer style={{height:"100%"}}>
            <Paper style={{height:"inherit", minWidth:"750px"}} elevation>
            <Table style={{minWidth:"750px"}}>
              <TableHead>
                <Typography
                  style={{ letterSpacing: "3px", width: "max-content" }}
                  variant="h6"
                >
                  Customer Details
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
                    onChange={(event) => setIdState(event.target.value)}
                  />
                </Grid>
                <TableRow>
                  <TableCell style={{ letterSpacing: "2px" }} width="20%">
                    Customer ID
                  </TableCell>
                  <TableCell style={{ letterSpacing: "2px" }} width="10%">
                    Name
                  </TableCell>
                  <TableCell style={{ letterSpacing: "2px" }} width="20%">
                    Email
                  </TableCell>
                  <TableCell style={{ letterSpacing: "2px" }} width="30%">
                    Address
                  </TableCell>
                  <TableCell style={{ letterSpacing: "2px" }} width="25%">
                    Contact No.
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
                    <TableCell style={{ letterSpacing: "2px" }} width="10%">
                      {row.name}
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="20%">
                      {row.email}
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="30%">
                      63 Arch St. Goodlettsville, TN 37072
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="25%">
                      9283 9210
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            </Paper>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
}
