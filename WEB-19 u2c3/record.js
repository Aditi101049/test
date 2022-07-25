// fill in javascript code here
document.querySelector("form").addEventListener("submit",employeesfunction)
function employeesfunction(event){
    event.preventDefault()

    //console.log("output")

    var nameofem=document.querySelector("#name").value;
    var idofem=document.querySelector("#employeeID").value;
    var deparmentofem=document.querySelector("#department").value;
    var exofem=document.querySelector("#exp").value;
    var emailofem=document.querySelector("#email").value;
    var mobileofem=document.querySelector("#mbl").value;

    var tr=document.createElement("tr")
    var td1=document.createElement("td");
    td1.innerText=nameofem;
    var td2=document.createElement("td");
    td2.innerText=idofem;
    var td3=document.createElement("td");
    td3.innerText=deparmentofem;
    var td4=document.createElement("td");
    td4.innerText=exofem;
    var td5=document.createElement("td");
    td5.innerText=emailofem;
    var td6=document.createElement("td");
    td6.innerText=mobileofem;
    var td7=document.createElement("td");
    if(Number(exofem)>5){
        td7.innerText="Senior"
    }
    else if(Number(exofem)<=5 && (Number(exofem)>=2)){
        td7.innerText="Junior"
    }
    else{
        td7.innerText="Fresher"
    }
    var td8=document.createElement("td");
    td8.innerText="DELETE"
    td8.style.color="red"
td8.style.backgroundColor="yellow"    
    var td9=document.createElement("td");
    td8.addEventListener("click",functiondelete)

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8)
    document.querySelector("tbody").append(tr)

}
function functiondelete(event){
    event.target.parentNode.remove();
}
