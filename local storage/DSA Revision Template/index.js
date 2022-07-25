document.querySelector("form").addEventListener("submit", myDsa)

// var aarrQue = [] //  1-----

var arrQue = JSON.parse(localStorage.getItem("queData")) || []
// if(localStorage.getItem("queDAta") == null){
//     arrQue = []
// }

// else{
//     arrQue = JSON.parse(localStorage.getItem("queData"))
// }

// disFunction(arrQue)


window.addEventListener("load", function(){
    disFunction(arrQue)
    // console.log("hkhk")
})

function myDsa(){
    event.preventDefault()
    let arrObj = {
        queTitle : document.querySelector("#title").value,
        queLink : document.querySelector("#link ").value,
        queDiff : document.querySelector("#difficulty").value
    }

    arrQue.push(arrObj)
    disFunction(arrQue)
    localStorage.setItem("queData", JSON.stringify(arrQue))
}


function disFunction(arrQue){
    document.querySelector("tbody").innerText = ""
    arrQue.forEach(function(ele){
        let tRow = document.createElement("tr")
        let td1 = document.createElement("td") 
        td1.innerText = ele.queTitle

        let td2 = document.createElement("td")
        td2.innerText = ele.queLink

        let td3 = document.createElement("td")
        td3.innerText = ele.queDiff

        let td4 = document.createElement("td")
        if(ele.queDiff == "Easy"){
            td4.innerHTML = "No"
        }

        else{
            td4.innerText = "Yes"
        }

        tRow.append(td1, td2, td3, td4)
        document.querySelector("tbody").append(tRow )
    })
}