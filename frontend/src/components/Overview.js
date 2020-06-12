import React from 'react'
import Reset from './button/ResetButton'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Search from './searchbar/Searchbar'

export default function Overview() {

    const classes = useStyles();

    // xs, sm, md, lg, xl are screen sizes
    // this will dynamically resize the size of the grid
    // as you make the browser small -> big or vice versa
    // if the row adds up to 12, then all of it will
    // be on the same row, otherwise it will get printed out
    // on th next row
    return (
        <div>

            <header></header>

            <main>
                <Grid container direction='row' justify='flex-start' alignItems="center" spacing={3} className={classes.grid}>
                    <Grid item xs={4} md={4}>
                        <Paper className={classes.paper}>Pending Customer Status</Paper>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Paper className={classes.paper}>Pending CreditCard Approval</Paper>
                    </Grid>
                    <Grid item xs={4} md={4}>
                        <Paper className={classes.paper}>Total Customers</Paper>
                    </Grid>
                </Grid>
                <h1>Customer List</h1>
                <Search />
                <footer className="footer"><Reset></Reset></footer>
            </main>
        </div>
    )
}





const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 230,
    },
    control: {
        padding: theme.spacing(2),
    },
}));








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