import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
        padding: theme.spacing(0, 3)
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        height: 100,
    },
    typography: {
        lineHeight: '100px',
        fontSize: 24,
    },
    button: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        marginTop: 50,
        height: 50,
    },
}));

const welcomeMessage = 'Welcome to the pizza store';

const message = 'See the selection of pizzas';

export default function AutoGridNoWrap(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs style={{textAlign: 'center'}} zeroMinWidth>
                        <Typography className={classes.typography} noWrap>{welcomeMessage}</Typography>
                    </Grid>
                </Grid>
            </Paper>
            <Grid container wrap="nowrap" spacing={2}>
                <Button className={classes.button} onClick={props.toggle} variant="contained" color="primary">
                    {message}
                </Button>
            </Grid>
        </div>
    );
}
