import React from "react";
import ApproveCreditCard from "./button/approvebutton/ApproveCreditCardButton";
import DenyCreditCard from "./button/denybutton/DenyCreditCardButton";
import Search from "./../admin_components/search/Search";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Table from "@material-ui/core/Table";
import clsx from "clsx";

export default function CreditCardStatus() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="1g" className={classes.container}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={3} lg={9}>
              <Paper className={fixedHeightPaper} elevation="3">
                Customer CreditCard Approval Status
                <Search />
                <Table>
                  <TableRow>
                    <TableCell>Customer ID</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Approval / Deny Account</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <TableCell>
                      <ApproveCreditCard />
                    </TableCell>
                    <TableCell>
                      <DenyCreditCard />
                    </TableCell>
                  </TableRow>
                </Table>
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

  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
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

