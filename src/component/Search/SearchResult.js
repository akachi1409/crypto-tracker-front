import React from "react";
import { Container, Table } from 'reactstrap';

import './SearchResult.css';

class SearchResult extends React.Component{
    constructor(props){
        super(props);
        this.state={
            price:"",
            coin:"",
            balance:"",
            description:""
        }
    }

    componentDidMount(){
        this.setState({
            price: this.props.location.state.price,
            coin: this.props.location.state.coin,
            balance: this.props.location.state.balance,
            description: this.props.location.state.description
        })
    }
    render(){
        const {price, coin, balance, description} = this.state;
        return(
            <Container fluid >
                <Table striped style={{color:'#ffffff'}}>
                    <thead>
                        <tr>
                            <th>Coin</th>
                            <th>Price (USD)</th>
                            <th>Balance (WEI)</th>
                            {/* <th>Description</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        <td>{coin}</td>
                        <td>{price}</td>
                        <td>{balance}</td>
                        {/* <th>{description}</th> */}
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default SearchResult;