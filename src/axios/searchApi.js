import axios from 'axios';
import API_URL from "../constants/ApiUrl";

export const getTokenHolding= (tokenAddress, walletAddress) =>{
    const data = {
        token: tokenAddress,
        wallet: walletAddress
    }
    console.log("data", data, API_URL.SERACH_URL)
    const config = {
        headers: {
            Accept: "application/json"
        }
    }
    return axios.post(API_URL.SERACH_URL, data, config)
    .then(res =>{
        console.log(res.data);
        return res.data;
    })
    .catch(function (error) {
        console.log(error.toJSON());
    });
}