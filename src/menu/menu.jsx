import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

export default function AutoGridNoWrap(props) {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            overflow: "hidden",
            padding: theme.spacing(0, 3),
        },
        paper: {
            maxWidth: 400,
            margin: `${theme.spacing(1)}px auto`,
            padding: theme.spacing(2),
            height: 100,
        },
        typography: {
            lineHeight: "100px",
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

    useEffect(() => {
        fetch("https://crudpi.io/a46a24/pizzapizza")
            .then(res => res.json())
            .then(res => setPizzas(res), setLoading(false))
            .catch(err => console.log(err));
    }, []);

    const pizzaList = pizzas.map(pizza => (
        <ListItem key={pizza.id}>
            {pizza.name}
            <br />
            {pizza.toppings.join(", ")}
            <br />
            {pizza.price}
        </ListItem>
    ));
    const { toggle } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid
                container
                wrap="nowrap"
                style={{ textAlign: "center" }}
                spacing={2}
            >
                {loading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <List>{pizzaList}</List>
                    </>
                )}
            </Grid>
            <Grid
                container
                wrap="nowrap"
                style={{ textAlign: "center" }}
                spacing={2}
            >
                <Button onClick={toggle} variant="contained" color="primary">
                    Go to frontpage
                </Button>
            </Grid>
        </div>
    );
}
