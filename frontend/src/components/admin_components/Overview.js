import React, { useState, useEffect } from "react";
import Reset from "./button/resetbutton/ResetButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Search from "./search/Search";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import clsx from "clsx";
import axios from "axios";
// 5 users per page

export default function Overview() {
  const classes = useStyles();
  // clsx
  //A tiny (228B) utility for constructing className strings conditionally.
  //Also serves as a faster & smaller drop-in replacement for the classnames module
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [allCustomerState, setAllCustomerState] = useState([]);
  const [countCustomerState, setCountCustomerState] = useState();

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
        setCountCustomerState(response.data.count);
      })
      // throws an error if there is no data
      .catch((error) => alert(error));
  };

  return (
    <Grid container justify = "center">

    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="1g" className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={3} md={2} lg={3}>
              <Paper className={fixedHeightPaper} elevation="3">
                Pending Customer Status
              </Paper>
            </Grid>
            <Grid item xs={3} md={2} lg={3}>
              <Paper className={fixedHeightPaper} elevation="3">
                Pending CreditCard Approval
              </Paper>
            </Grid>
            <Grid item xs={3} md={2} lg={3}>
              <Paper className={fixedHeightPaper} elevation="3">
                Total Customers
                <span>{countCustomerState}</span>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="center">
            <Grid item xs={6}>
              <Paper elevation="3">
                <Table>
                  <TableHead>
                    <TableRow>Customer List</TableRow>
                    <TableRow>
                      <Search />
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Customer ID</TableCell>
                      <TableCell>Account Status</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Balance</TableCell>
                      <TableCell>CreditCard Type</TableCell>
                      <TableCell>CreditCard Status</TableCell>
                      <TableCell>CreditCard Limit</TableCell>
                    </TableRow>
                  </TableBody>
                  <TableBody>
                    {allCustomerState.map((user) => (
                      <TableRow>
                        <TableCell>{user._id}</TableCell>
                        <TableCell>{user.account_status}</TableCell>
                        <TableCell>{user.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
      <Box pt={4}>
        <Reset></Reset>
      </Box>
    </div>
    </Grid>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },

  title: {
    flexGrow: 1,
  },

  appBarSpacer: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
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
    height: 240,
  },
}));

{
  /* <Grid container direction='row' justify='flex-start' alignItems="center" spacing={3} className={classes.grid}>
    <Grid item xs={4} md={4}>
        <Paper className={classes.paper}>Pending Customer Status</Paper>
    </Grid>
    <Grid item xs={4} md={4}>
        <Paper className={classes.paper}>Pending CreditCard Approval</Paper>
    </Grid>
    <Grid item xs={4} md={4}>
        <Paper className={classes.paper}>Total Customers</Paper>
    </Grid>
</Grid> */
}

// xs, sm, md, lg, xl are screen sizes
// this will dynamically resize the size of the grid
// as you make the browser small -> big or vice versa
// if the row adds up to 12, then all of it will
// be on the same row, otherwise it will get printed out
// on th next row

// function SpacingGrid() {
//     const [spacing, setSpacing] = React.useState(2);
//     const classes = useStyles();

//     const handleChange = (event) => {
//         setSpacing(Number(event.target.value));
//     };

//     return (
//         <Grid container className={classes.root} spacing={2}>
//             <Grid item xs={12}>
//                 <Grid container justify="center" spacing={spacing}>
//                     {[0, 1, 2].map((value) => (
//                         <Grid key={value} item>
//                             <Paper className={classes.paper} />
//                         </Grid>
//                     ))}
//                 </Grid>
//             </Grid>
//             <Grid item xs={12}>
//                 <Paper className={classes.control}>
//                     <Grid container>
//                         <Grid item>

//                         </Grid>
//                     </Grid>
//                 </Paper>
//             </Grid>
//         </Grid>
//     );
// }
