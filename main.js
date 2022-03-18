
// change bg body
let body = document.getElementById("body");
let Input = document.getElementById("change");
Input.addEventListener("input", ()=>{
    body.style.color = "#fff";
    body.style.backgroundColor = Input.value;
})