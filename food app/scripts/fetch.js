let getData =async(url)=>{
    let res=await fetch(url);
   let data= await res.json();
//console.log(data)
// // data=data.sort((a,b)=>{
// //    return a.price-b.price
// // })
 return data;
 };
 getData();

let append=(data,container)=>{
    data.forEach(function(ele){
        let img=document.createElement("img");
        img.src=image;
    
    let c=document.createElement("h3");
    c.innerText=category;
    let p=document.createElement("p");
    p.innerText=discription;
    
    let div=document.createElement("div");
    div.append(img,c,p)
    
    container.append(div);
    
    });
// data.forEach(({category,discription,image})=>{
//     let img=document.createElement("img");
//     img.src=image;

// let c=document.createElement("h3");
// c.innerText=category;
// let p=document.createElement("p");
// p.innerText=discription;

// let div=document.createElement("div");
// div.append(img,c,p)

// container.append(div);

// });
};

let id;
function debounce(func,delay){
    if(id) clearTimeout(id);
    id=setTimeout(function(){
        fun();
    },delay);
}


export{getData,append} //Named export

// let box=document.querySelector("#container");

// async function getdata(){
//     let s=document.getElementById("query").value;
//     fetcdata(s)
//     let n=await fetcdata(s)
   
//     append(n);
//     }
//     async function fetcdata(s){
//         const url=`https://masai-mock-api.herokuapp.com/hotels/search?city=${s}`;
//         let x=await fetch(url);
//         let y=await x.json()
//         console.log(y.foods);
//         return y.foods;
        
//     }
//    // getdata();
//     function append(data){
//         if(!data){
//         return;
//     }
//         // box.innerHTML=null;

//         data.forEach(({category,discription,image})=>{

//             let img=document.createElement("img");
//             img.src=image;
//             let c=document.createElement("h3");
//             c.innerText=category;
//             let p=document.createElement("p");
//             p.innerText=discription;
            
//             let div=document.createElement("div");
//             div.append(c,p,img)
            
//             box.append(div);
            
//             });
//             };
//             let id;
// function debounce(func,delay){
//     if(id) clearTimeout(id);
//     id=setTimeout(function(){
//         func();
//     },delay);
// }


            // export{getdata,append} //Named export