import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import LoginDialog from "./loginDialog";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(5),
    },
    title: {
        flexGrow: 1,
    },
}));


export default function Header() {
    const classes = useStyles();
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const openLoginDialog = () => {
        setDialogOpen(true);
    };
    const handleClose = () => {
        setDialogOpen(false);
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Pizza-Fun
                    </Typography>
                    <Button onClick={openLoginDialog} color="inherit">Login</Button>
                    <LoginDialog open={dialogOpen} onClose={handleClose} />
                </Toolbar>
            </AppBar>
        </div>
    );
}
