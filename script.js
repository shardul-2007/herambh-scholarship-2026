document.addEventListener("DOMContentLoaded", function(){

const form = document.getElementById("appForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;

let id = "SCH" + Math.floor(Math.random()*100000);

localStorage.setItem(id,name);

document.getElementById("appID").innerHTML =
"Application Submitted. Your ID: " + id;

});

}

});

function checkStatus(){

let id = document.getElementById("searchID").value;

let data = localStorage.getItem(id);

if(data){

document.getElementById("result").innerHTML =
"Application Found: " + data + " (Under Review)";

}

else{

document.getElementById("result").innerHTML =
"Application ID Not Found";

}

}