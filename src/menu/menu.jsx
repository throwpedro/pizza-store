import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from "@material-ui/core/Button";

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pizzas: [],
        };
    }

    componentDidMount() {
        fetch('https://crudpi.io/a46a24/pizzapizza')
            .then(res => res.json())
            .then(res => this.setState({ pizzas: res }))
            .catch(err => console.log(err));
    }

    render() {
        const pizzas = this.state.pizzas.map(pizza => <ListItem key={pizza.id}>{pizza.name}</ListItem>)
        return(
            <div>
                <List>
                    {pizzas}
                </List>
                <Button onClick={this.props.toggle} variant="contained" color="primary">
                    Go to frontpage
                </Button>
            </div>
        );
    }
}