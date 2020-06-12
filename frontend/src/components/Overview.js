import React from 'react'
import Reset from './button/ResetButton'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Search from './searchbar/Searchbar'
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';

export default function Overview() {

    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div className={classes.root}>
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




{/* <Grid container direction='row' justify='flex-start' alignItems="center" spacing={3} className={classes.grid}>
    <Grid item xs={4} md={4}>
        <Paper className={classes.paper}>Pending Customer Status</Paper>
    </Grid>
    <Grid item xs={4} md={4}>
        <Paper className={classes.paper}>Pending CreditCard Approval</Paper>
    </Grid>
    <Grid item xs={4} md={4}>
        <Paper className={classes.paper}>Total Customers</Paper>
    </Grid>
</Grid> */}







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