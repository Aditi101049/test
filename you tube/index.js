// const api_key="AIzaSyBrHIRkQ_B5GhGnNrszHuHplEhE1Ci1rlI";

// //'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=[YOUR_API_KEY]'

// let search=async ()=>{
//     let query =document.getElementById("query").value;
//     let data=await getData(query);
//     append(data);
//    // getData(query);

// };
// let getData=async (query)=>{
//     let url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`
// let res=await fetch(url);
//     let data=await res.json();
//    append(data.items);
//     console.log(data);
//     return data.items;
// };

// let append=(data)=>{
//     let container=document.getElementById("container");
//    container.innerHTML=null;

//     data.forEach((el)=>{
//         let img=document.createElement("img");
//         img.src=el.snippet.thumbnails.medium.url;

//         let h3=document.createElement("h3");
//         h3.innerText=el.snippet.title;
// //h3.innerText=title;
//      //   h3.style.color=white;

//         let div=document.createElement("div");
//         div.onclick=()=>{
//             saveVideo(el);
//         };
//         div.setAttribute("class","video");
//       //  console.log(el.snippet.title)
//         div.append(img,h3);
//         container.append(div);
      
//     });
// };
// let saveVideo=(data)=>{
//     localStorage.setItem("video",JSON.stringify(data));
//     window.location.herf="video.html";
//     append(data);
// }

const api_key = "AIzaSyBrHIRkQ_B5GhGnNrszHuHplEhE1Ci1rlI"



let q = "";

async function pelethi(){
    let urll= `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&key=${api}`;
   // let urll=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&videoCategoryId=thor&key=${api}`
   let ress= await fetch(urll)
   let dd= await ress.json();
   append(dd.items)
}

let search = async () => {
    let query = document.getElementById('query').value;
    let data = await getData(query)
    q = query;
    append(data)
}
let getData = async (query) => {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`

    let res = await fetch(url)
    let data = await res.json()

    console.log(data);
    return data.items;

};

let append = (data) => {

    let container = document.getElementById("container");
    container.innerHTML = null;

    data.forEach((el) => {
        //snippet ---> title
        //snippet--> thumbnails --> medium --> url 

        let img = document.createElement('img')
        img.src = el.snippet.thumbnails.medium.url;

        let h3 = document.createElement("h3")
        h3.innerText = el.snippet.title;

        let div = document.createElement("div");
        div.setAttribute("class", "video");
        div.onclick = () => {
            saveVideo(el)
        }

        div.append(img, h3)
        container.append(div)

    })
}

let saveVideo = (data) => {
    localStorage.setItem("video", JSON.stringify(data))
    window.location.href = "video.html"
};

// let filter = async () => {
//     let data = await getData(q);
//     console.log(data)
//     data = data.filter((el) => {
//         return el.snippet.channelId === "";
//     });
//     append(data)
// }




