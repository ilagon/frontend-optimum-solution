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
  Button,
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
  searchIconStyle: {
    marginTop: "25px",
    marginLeft: "20px",
    marginRight: "30px",
  },
  containerStyle: {
    marginTop: "100px",
  },

  gridContainerStyle: {
    marginTop: "131px",
    height: "81%",
    marginLeft: "262px",
    width: "85%",
  },
}));

export default function CreditCardStatus() {
  const classes = useStyles();

  const [approveCreditCardState, setApproveCreditCardState] = useState();
  const [allCreditCardState, setAllCreditCardState] = useState([]);
  const [loadedState, setLoadedState] = useState(true);


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


  const getCreditCard = () => {
    axios
      .patch(
        `http://localhost:9000/creditcard/approve/${approveCreditCardState}`,
        {
          Data: {
            creditcard_status: "active",
          },
        }
      )
      .then((response) => {
        console.log(response.data.creditcard.creditcard_status);
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    getCreditCard();
  }, [approveCreditCardState]);

  return (
    <Container>
      <Grid container justify="center" className={classes.gridContainerStyle}>
        <Grid item className={classes.gridItem} xs={12}>
          <TableContainer component={Paper}>
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

                    <TableCell style={{ letterSpacing: "2px" }} width="15%">
                      {row.creditcard_type}
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="15%">
                      {console.log(row._id)}
                      <Button
                        variant="contained"
                        value={row._id}
                        onClick={(event) =>
                          setApproveCreditCardState(event.target.value)
                        }
                      >
                        Approve
                      </Button>
                    </TableCell>
                    <TableCell style={{ letterSpacing: "2px" }} width="20%">
                      {/* <DenyCreditCard /> */}
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
