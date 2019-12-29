import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "./menu/menu";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        overflow: "hidden",
        padding: theme.spacing(0, 3),
    },
    manu: {
        maxWidth: 400,
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
        height: 100,
    },
}));

export default function AutoGridNoWrap(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Menu className={classes.menu} toggle={props.toggle} />
        </div>
    );
}
