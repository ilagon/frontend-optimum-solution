import React, { useState, useEffect } from "react";
import Reset from "./button/resetbutton/ResetButton";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Search from "./searchbar/Searchbar";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import clsx from "clsx";
import axios from "axios";

// 5 users per page

export default function Overview() {
  const classes = useStyles();
  // clsx
  //A tiny (228B) utility for constructing className strings conditionally.
  //Also serves as a faster & smaller drop-in replacement for the classnames module
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [userState, setUserState] = useState([]);
  const [countUserState, setCountUserState] = useState();

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
        setCountUserState(response.data.count);
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
                <span>{countUserState}</span>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="center">
            <Grid item xs={6}>
              <Paper elevation="3">
                <table>
                  <thead>
                    <tr>Customer List</tr>
                    <tr>
                      <Search />
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Customer ID</th>
                      <th>Account Status</th>
                      <th>Email</th>
                      <th>Balance</th>
                      <th>CreditCard Type</th>
                      <th>CreditCard Status</th>
                      <th>CreditCard Limit</th>
                    </tr>
                  </tbody>
                  <tfoot>
                    {userState.map((user) => (
                      <tr>
                        <td>{user._id}</td>
                        <td>{user.account_status}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                      </tr>
                    ))}
                  </tfoot>
                </table>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Reset></Reset>
          </Box>
        </Container>
      </main>
    </div>
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
