let form=document.querySelector("form");
 function showInfo(){
     event.preventDefault();
     let obj={
         name:form.name.value,
         email:form.email.value,
         organization:form.organization.value
     }
     alert(obj.name+" "+"Welcome to masai school")
 }
 form.addEventListener("submit",showInfo);