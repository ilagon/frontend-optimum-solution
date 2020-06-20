import React, { useState, useEffect } from "react";
import ApproveCreditCard from "./button/approvebutton/ApproveCreditCardButton";
import DenyCreditCard from "./button/denybutton/DenyCreditCardButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Grid,
  Paper,
  Container,
  TableHead,
  TableRow,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  Typography,
  TextField,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

// Overrides the current default theme provided by the material UI
const useStyles = makeStyles((theme) => ({
  gridItem: {
    paddingTop: 40,
  },
  table: {
    minWidth: 650,
  },
  searchIconStyle :{
    marginTop: "25px",
    marginLeft: "20px",
    marginRight: "30px",
  },
}));

export default function CreditCardStatus() {
  const classes = useStyles();

  const [allCustomerState, setAllCustomerState] = useState([]);
  const [customerState, setCustomerState] = useState({});
  const [idState, setIdState] = useState("");

  // Upon loading, useEffect will get called
  useEffect(() => {
    getAllCustomer();
  }, []);

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
                <Typography style={{letterSpacing:"3px", width:"max-content"}} variant="h6">Customer CreditCard Approval Status</Typography>
                <Grid>
                  <FontAwesomeIcon icon={faSearch} className={classes.searchIconStyle} />
                  <TextField
                    id="search-with-icon"
                    value={idState}
                    label="SEARCH"
                    onChange={(event) => setIdState(event.target.value)}
                  />
                </Grid>
                <TableRow>
                  <TableCell style={{letterSpacing:"2px"}} width="30%">Customer ID</TableCell>
                  <TableCell style={{letterSpacing:"2px"}} width="20%">Email</TableCell>
                  <TableCell style={{letterSpacing:"2px"}} width="15%">CreditCard Type</TableCell>
                  <TableCell style={{letterSpacing:"2px"}} width="15%" align='right'>Approve /</TableCell>
                  <TableCell style={{letterSpacing:"2px"}} width="20%" align='left'>Deny CreditCard</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {allCustomerState.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell style={{letterSpacing:"2px"}} width="30%" component="th" scope="row">
                      {row._id}
                    </TableCell>
                    <TableCell style={{letterSpacing:"2px"}} width="20%">{row.email}</TableCell>
                    <TableCell style={{letterSpacing:"2px"}} width="15%">Platinum</TableCell>
                    <TableCell style={{letterSpacing:"2px"}} width="15%" align='right'>
                      <ApproveCreditCard />
                    </TableCell>
                    <TableCell style={{letterSpacing:"2px"}} width="20%" align='left'>
                      <DenyCreditCard />
                    </TableCell>
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
