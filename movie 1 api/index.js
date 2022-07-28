const url="https://www.omdbapi.com/?i=tt3896198&apikey=2d516ca9"

async function getData(){
    try{
    let res = await fetch(url);
    let data= await res.json();
    append(res.data);
    console.log(data);

}
catch(err){
    console.log(err)
}
}
getData();
//.then -> .cath
//async await -> try catch
