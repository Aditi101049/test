import navbar from "../component/navbar.js";

console.log(navbar());

document.getElementById("navbar").innerHTML=navbar()

//------------get navbar using js---- upper line untill------------------>----
  
// url-https://www.themealdb.com/api/json/v1/1/categories.php

import {
    getData,append
} from "./fetch.js";

const url =`https://www.themealdb.com/api/json/v1/1/categories.php`

let container=document.getElementById("container")

getData(url).then((res)=>{
    console.log(res);
    append(res,container);
})