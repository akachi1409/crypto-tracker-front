import React, {useState} from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useHistory } from 'react-router-dom';

// import axios from "axios";
import './Search.css';
import { getTokenHolding } from "../../axios/searchApi";
const Search = ({history}) => {
    const [token, setToken] = useState("");
    const [wallet, setWallet] = useState("");
    const search = async( ) =>{
        const data = await getTokenHolding(token, wallet);
        console.log("Back:", data.description);
        if (data.description != ""){
            history.push({
                pathname: "/result",
                state: {description: data.description, price:data.price, balance: data.balance, coin: data.coin}
            });
        }
    }

    const handleToken = (e)=>{
        setToken(e.target.value);
    }
    const handleWallet = (e) =>{
        setWallet(e.target.value);
    }
    return(
        <Container fluid >
            <Form>
                <FormGroup className="mb-3">
                    <Label size="lg" for="exampleToken">Token</Label>
                    <Input size="lg" type="text" name="token"  id="exampleToken" value = {token} onChange={(e)=> handleToken(e)} placeholder="Input the token name." />
                </FormGroup>
                <FormGroup className="mb-3">
                    <Label size="lg" for="exampleAddress">Address</Label>
                    <Input size="lg" type="text" name="address" id="exampleAddress" value = {wallet} onChange={(e)=> handleWallet(e)} placeholder="Input the wallet address." />
                </FormGroup>
                <Button color="primary" onClick={()=>search()}>Search</Button>
            </Form>
        </Container>
    )
}

export default Search;