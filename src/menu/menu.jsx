import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from "@material-ui/core/Button";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzas: [],
            loading: true,
        };
    }

    componentDidMount() {
        fetch("https://crudpi.io/a46a24/pizzapizza")
            .then(res => res.json())
            .then(res =>
                this.setState({
                    pizzas: res,
                    loading: false,
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        const pizzas = this.state.pizzas.map(pizza => (
            <ListItem key={pizza.id}>
                {pizza.name}
                <br/>
                {pizza.toppings.join(', ')}
                <br/>
                {pizza.price}
            </ListItem>
        ));
        const { loading } = this.state;
        const { toggle } = this.props;
        return (
            <div>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <List>{pizzas}</List>
                        <Button
                            onClick={toggle}
                            variant="contained"
                            color="primary"
                        >
                            Go to frontpage
                        </Button>
                    </>
                )}
            </div>
        );
    }
}
