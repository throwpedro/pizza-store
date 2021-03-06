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
    const [errors, setErrors] = useState(null);

    const useStyles = makeStyles(theme => ({
        root: {
            flexGrow: 1,
            overflow: "hidden",
            padding: theme.spacing(0, 3),
            textAlign: "center",
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
            .then(res => {
                setPizzas(res);
            })
            .catch((err) => {
                setErrors('Failed to fetch pizzas :(')
            })
            .finally(() => setLoading(false));
        }, []);

    const { toggle } = props;
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container wrap="nowrap" justify="center">
                {loading ? (
                    <>
                        <CircularProgress />
                    </>
                ) : (
                    errors ? (
                        <div>{errors}</div>
                    ) : (
                        <>
                            <List>
                                {pizzas.map(pizza => (
                                    <ListItem key={pizza.id}>
                                        {pizza.name}
                                        <br />
                                        {pizza.toppings.join(", ")}
                                        <br />
                                        {pizza.price}
                                    </ListItem>
                                ))}
                            </List>
                        </>
                    ))}
            </Grid>
            <Grid container wrap="nowrap" spacing={2} justify="center">
                <Button
                    className={classes.button}
                    onClick={toggle}
                    variant="contained"
                    color="primary"
                >
                    Go to frontpage
                </Button>
            </Grid>
        </div>
    );
}
