
import HomePage from "./home/home_page";
import axios from "axios";

async function getAllProductsInfo(){
    var data = [];
    axios.get("https://api.escuelajs.co/api/v1/products?limit=21&offset=10").then((res)=>{
        data = res.data;
        return data;
    })
}
export default async function cardPage(){
    
    return(
        <HomePage/>
    )
}