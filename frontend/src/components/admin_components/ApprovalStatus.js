import React, { useState, useEffect } from "react";
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
  Button,
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

  tableContainerStyle: {
    height: "165%",
    minHeight: "80vh",
  },

  approveButtonStyle: {
    background: "#00a152",
    color: "#fff",
    right: "100px",
  },

  denyButtonStyle: {
    background: "#d32f2f",
    color: "#fff",
    right: "120px",
  },
}));

export default function ApprovalStatus() {
  const classes = useStyles();

  const [allCustomerState, setAllCustomerState] = useState([]);
  const [customerState, setCustomerState] = useState({});
  const [idState, setIdState] = useState();

  // Upon loading, useEffect will get called
  useEffect(() => {
    getAllCustomer();
  }, []);

  const getAllCustomer = () => {
    axios
      .get(`http://localhost:9000/pending/pending`)

      .then((response) => {
        // Retrieve from object => object => array (Users)
        setAllCustomerState(response.data.Users);
        console.log(response.data);
      })
      // throws an error if there is no data
      .catch((error) => alert(error));
  };

  // Searching for a specific customer
  const getSpecificCustomer = () => {
    axios
      .get(`http://localhost:7001/users/search/${idState}`)
      .then((response) => {
        setCustomerState(response.data.user);
      })
      .catch((error) => alert(error));
  };

  const handleId = (event) => {
    setIdState(event.target.value);
  };

  const approveCustomer = () => {
    axios
      .patch(`http://localhost:9000/users/${idState}/activate`)
      .then((response) => {
        console.log(response.data.Users);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    approveCustomer();
    denyCustomer();
    getSpecificCustomer();
  }, [idState]);

  const denyCustomer = () => {
    axios
      .patch(`http://localhost:9000/users/${idState}/deactivate`)
      .then((response) => {
        console.log(response.data.Users);
      })
      .catch((error) => alert(error));
  };

  const onClickApprove = (event) => {
    setIdState(event.target.value);
  };

  const onClickDeny = (event) => {
    setIdState(event.target.value);
  };

  return (
    <Container className={classes.containerStyle} fixed>
      <Grid container justify="center" className={classes.gridContainerStyle}>
        <Grid item xs={12}>
          <TableContainer style={{ height: "100%" }}>
            <Paper style={{ height: "inherit", minWidth: "750px" }} elevation>
              <Table style={{ minWidth: "750px" }}>
                <TableHead>
                  <Typography
                    style={{ letterSpacing: "3px", width: "max-content" }}
                    variant="h6"
                  >
                    Customer Account Approval Status
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
                    <TableCell style={{ letterSpacing: "2px" }} width="30%">
                      Customer ID
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="30%">
                      Email
                    </TableCell>
                    <TableCell
                      style={{ letterSpacing: "2px" }}
                      width="25%"
                      align="right"
                    >
                      Approve / Deny Account
                    </TableCell>
                    <TableCell
                      style={{ letterSpacing: "2px" }}
                      width="15%"
                      align="left"
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCustomerState.map((row) => (
                    <TableRow key={row._id}>
                      <TableCell
                        style={{ letterSpacing: "2px" }}
                        width="30%"
                        component="th"
                        scope="row"
                      >
                        {row._id}
                      </TableCell>

                      <TableCell style={{ letterSpacing: "2px" }} width="30%">
                        {row.email}
                      </TableCell>
                      <TableCell
                        style={{ letterSpacing: "2px" }}
                        width="25%"
                        align="right"
                      >
                        <Button
                          className={classes.approveButtonStyle}
                          variant="contained"
                          value={row._id}
                          onClick={onClickApprove}
                          disableRipple
                        >
                          Approve
                        </Button>
                      </TableCell>
                      <TableCell
                        style={{ letterSpacing: "2px" }}
                        width="15%"
                        align="left"
                      >
                        <Button
                          className={classes.denyButtonStyle}
                          variant="contained"
                          value={row._id}
                          onClick={onClickDeny}
                          disableRipple
                        >
                          Deny
                        </Button>
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