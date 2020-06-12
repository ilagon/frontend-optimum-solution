import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

export default function Searchbar() {
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <Grid container spacing={1} alignItems='flex-end'>
                <Grid item>
                    <SearchIcon />
                </Grid>
                <Grid item>
                    <TextField id='search-with-icon' label='Search' />
                </Grid>
            </Grid>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
}));