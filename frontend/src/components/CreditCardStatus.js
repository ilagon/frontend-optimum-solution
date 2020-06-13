import React from 'react'
import ApproveCreditCard from './button/ApproveCreditCardButton'
import DenyCreditCard from './button/DenyCreditCardButton'
import Search from './searchbar/Searchbar'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';

export default function CreditCardStatus() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth='1g' className={classes.container}>
                    <Grid container spacing={3} justify="center" >
                        <Grid item xs={12} md={3} lg={9}>
                            <Paper className={fixedHeightPaper} elevation='3'>
                                Customer CreditCard Approval Status
                            <Search />
                                <table>
                                    <th>Customer ID</th>
                                    <th>Email</th>
                                    <th>Approval / Deny Account
                                    <tr><ApproveCreditCard /><DenyCreditCard /></tr>
                                    </th>
                                </table>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'flex',
    },

    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },

    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },

    title: {
        flexGrow: 1,
    },

    appBarSpacer: theme.mixins.toolbar,

    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },

    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },

    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },

    fixedHeight: {
        height: 240,
    },

}));

{/* <div className={classes.root}>
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
        </div> */}