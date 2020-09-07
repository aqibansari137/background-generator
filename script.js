var c1=document.getElementById("color1");
var c2=document.getElementById("color2");
var h3=document.querySelector("h3");
var body=document.getElementById("grad");

function colorchange(){
    body.style.background=
    "linear-gradient(to right,"
    + c1.value
    + ", "
    + c2.value 
    +")";
    h3.textContent=body.style.background+";";
}

c1.addEventListener("input",colorchange);
c2.addEventListener("input",colorchange);