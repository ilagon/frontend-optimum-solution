import React, { useState, useEffect } from "react";
import ApproveAccount from "./button/ApproveAccountButton";
import DenyAccount from "./button/DenyAccountButton";
import Search from "./searchbar/Searchbar";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import axios from "axios";
import { TableHead } from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";

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
  const [userState, setUserState] = useState([]);
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
    getUser();
  }, []);

  const getUser = () => {
    axios
      .get("http://localhost:9000/users")
      .then((response) => {
        // Retrieve from object => object => array (Users)
        setUserState(response.data.Users);
      })
      // throws an error if there is no data
      .catch((error) => alert(error));
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="1g" className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={3} lg={3}>
              <Paper className={fixedHeightWidthPaper} elevation="3">
                <Table>
                  <TableHead>
                    <TableRow>
                      <th>Customer Account Approval Status</th>
                      <th>
                        <TablePagination
                          userPerPageOptions={[5, 10, 15]}
                          component="div"
                          count={userState.length}
                          userPerPage={userPerPage}
                          page={page}
                          onChangePage={handlePageChanges}
                          onChangeRowsPerPage={handleUserPerPageChanges}
                        />
                      </th>
                    </TableRow>
                    <TableRow>
                      <Search />
                    </TableRow>
                  </TableHead>
                </Table>

                <table>
                  <thead>
                    <th>Customer ID</th>
                    <th>Email</th>
                    <th>Approval / Deny Account</th>
                  </thead>
                  <tbody>
                    {userState.map((user) => (
                      <tr>
                        <td>{user._id}</td>
                        <td>{user.email}</td>
                        <ApproveAccount></ApproveAccount>
                        <DenyAccount></DenyAccount>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
