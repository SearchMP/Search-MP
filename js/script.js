let singupBtn = document.getElementById("singupBtn");
let signinBtn = document.getElementById("singinBtn");
let nameField = document.getElementById("nameField");
let heading = document.getElementById("heading");

function dsinIn() {
    document.getElementById("heading").innerHTML = "Sign In";
    document.getElementById("signinBtn").className = "btn-purpal";
    document.getElementById("singupBtn").className = "btn-disabled";
    document.getElementById("nameField").style.maxHeight = "0";
}
function dsinUp() {
    document.getElementById("heading").innerHTML = "Sign Up";
    document.getElementById("signinBtn").className = "btn-disabled";
    document.getElementById("singupBtn").className = "btn-purpal";
    document.getElementById("nameField").style.maxHeight = "60px";
}
