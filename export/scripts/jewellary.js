import navbar from "../componets/navbar.js";

//console.log(navbar());

document.getElementById("navbar").innerHTML=navbar()

//------------get navbar using js---- upper line untill------------------>----

import {
    getData,append
} from "./fetch.js";

const url =`https://fakestoreapi.com/products/category/jewelery`

let container=document.getElementById("container-1")

getData(url).then((res)=>{
    console.log(res);
    append(res,container);
})