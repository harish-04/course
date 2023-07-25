let name=document.querySelector("#btn-name");
let mblNo= document.querySelector("#btn-mbl");
let tankerNo= document.querySelector("#btn-tanker");
let email= document.querySelector("#btn-email");

name.addEventListener("input",()=>{
    console.log(name.value);
})
mblNo.addEventListener("input",()=>{
    console.log(mblNo.value);
})
tankerNo.addEventListener("input",()=>{
    console.log(tankerNo.value);
})
email.addEventListener("input",()=>{
    console.log(email.value);
})