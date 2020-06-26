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
    left: "41%",
  },

  denyButtonStyle: {
    background: "#d32f2f",
    color: "#fff",
    right: "100%",
  },
}));

export default function CreditCardStatus() {
  const classes = useStyles();

  const [approveCreditCardState, setApproveCreditCardState] = useState();
  const [denyCreditCardState, setDenyCreditCardState] = useState();
  const [allCreditCardState, setAllCreditCardState] = useState([]);

  // Get all pending creditcard
  const getAllCreditCard = () => {
    axios
      .get(`http://localhost:9000/creditcard/pending`)
      .then((response) => {
        // Retrieve from object => object => array (creditcard)
        setAllCreditCardState(response.data.creditcard);
      })
      .catch((error) => alert(error));
  };

  // Upon loading, useEffect will get called
  useEffect(() => {
    getAllCreditCard();
  }, []);

  const getApproveCreditCard = (id, type) => {
    axios
      .patch(`http://localhost:9000/creditcard/approve/`, {
        cardId: id,
        card_type: type
      })
      .then((response) => {
        console.log(response.data.creditcard.creditcard_status);
      })
      .catch((error) => alert(error));
  };


  const getDenyCreditCard = () => {
    axios
      .patch(`http://localhost:9000/deny/reject/${denyCreditCardState}`)
      .then((response) => {
        console.log(response.data.creditcard.creditcard_status);
      })
  };
  
  const onClickApprove = (event) => {
    let cardType = document.getElementById(`${event.target.value}type`).value;
    //setApproveCreditCardState(event.target.value);
    getApproveCreditCard(event.target.value, cardType);
  };

  const onClickDeny = (event) => {
    setDenyCreditCardState(event.target.value);
  };

  return (
    <Container className={classes.containerStyle} fixed>
      <Grid container justify="center" className={classes.gridContainerStyle}>
        <Grid item xs={12}>
          <TableContainer style={{ height: "100%" }}>
            <Paper style={{ height: "inherit", minWidth: "750px" }} elevation>
              <Table className={classes.table}>
                <TableHead>
                  <Typography
                    style={{ letterSpacing: "3px", width: "max-content" }}
                    variant="h6"
                  >
                    Customer CreditCard Approval Status
                  </Typography>
                  <Grid>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className={classes.searchIconStyle}
                    />
                    <TextField id="search-with-icon" label="SEARCH" />
                  </Grid>
                  <TableRow>
                    <TableCell style={{ letterSpacing: "2px" }} width="30%">
                      Customer ID
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="20%">
                      Email
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="15%">
                      CreditCard Type
                    </TableCell>
                    <TableCell
                      style={{ letterSpacing: "2px" }}
                      width="25%"
                      align="right"
                    >
                      Approve / Deny CreditCard
                    </TableCell>
                    <TableCell
                      style={{ letterSpacing: "2px" }}
                      width="10%"
                      align="left"
                    ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {allCreditCardState.map((row, index) => (
                    <TableRow key={row._id}>
                      <TableCell
                        style={{ letterSpacing: "2px" }}
                        width="30%"
                        component="th"
                        scope="row"
                      >
                        {row._id}
                      </TableCell>

                      <TableCell style={{ letterSpacing: "2px" }} width="20%">
                        {row.user.email}
                      </TableCell>

                      <TableCell id={`${row._id}type`} style={{ letterSpacing: "2px" }} width="15%">
                        {row.creditcard_type}
                      </TableCell>
                      <TableCell
                        style={{
                          letterSpacing: "2px",
                        }}
                        width="15%"
                      >
                        {console.log(row._id)}
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
                        style={{
                          letterSpacing: "2px",
                        }}
                        width="20%"
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
