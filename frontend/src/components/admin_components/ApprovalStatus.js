import React, { useState, useEffect } from "react";
import clsx from "clsx";
import axios from "axios";
import ApproveAccount from "./button/approvebutton/ApproveAccountButton";
import DenyAccount from "./button/denybutton/DenyAccountButton";
import Search from "./../admin_components/search/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";

// 10 Users per page

export default function ApprovalStatus() {
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
  const [page, setPage] = useState(0);
  const [userPerPage, setUserPerPage] = useState(10);

  const handlePageChanges = (event, newPage) => {
    setPage(newPage);
  };

  const handleUserPerPageChanges = (event) => {
    setUserPerPage(+event.target.value);
    setPage(0);
  };

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
                    <TableRow>
                      <TableCell>Customer Account Approval Status</TableCell>
                      <TableCell>
                        <TablePagination
                          userPerPageOptions={[5, 10, 15]}
                          component="div"
                          count={allCustomerState.length}
                          userPerPage={userPerPage}
                          page={page}
                          onChangePage={handlePageChanges}
                          onChangeRowsPerPage={handleUserPerPageChanges}
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <Search />
                    </TableRow>
                    <TableRow>
                      <TableCell>Customer ID</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Approve / Deny Account</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
                <TableBody>
                  {allCustomerState.map((user) => (
                    <TableRow key={user._id}>
                      <TableCell>{user._id}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>
                        <ApproveAccount />
                      </TableCell>
                      <TableCell>
                        <DenyAccount />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}

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

{
  /* <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth='1g' className={classes.container}>
                    <Grid container spacing={3}  justify="center" >
                        <Grid item xs={12} md={3} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                Pending Customer Status
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                Pending CreditCard Approval
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={3} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                Total Customers
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} justify="center">
                        <Grid item xs={9}>
                            <Paper className={fixedHeightPaper}>
                                Customer List
                                <Search />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Reset></Reset>
                    </Box>
                </Container>
            </main>
        </div> */
}
