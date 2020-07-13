const { serializeUser } = require("passport");
const axios = require("axios");

const searchTerm = "tent";
const searchQuery = "https://www.amazon.com/s?k=" + searchTerm;

let http = require("https");

let apihost = "k";
let apikey = "6a4f58d15amsh9ccab0edfea8d58p16715bjsn6005247d76c3";


let asin = "B004J2KDH0";

axios({
    "method":"GET",
    "url":"https://amazon-products1.p.rapidapi.com/product",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"amazon-products1.p.rapidapi.com",
    "x-rapidapi-key":apikey,
    "useQueryString":true
    },"params":{
    "country":"US",
    "asin":asin
  }
}).then((response)=>{
    //console.log(response);
    console.log(response.data.description);
})
.catch((error)=>{
    console.log(error)
})

